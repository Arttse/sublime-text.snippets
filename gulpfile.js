var gulp            = require ( 'gulp' ),
    toc             = require ( 'gulp-doctoc' ),
    zip             = require ( 'gulp-zip' ),
    validatePackage = require ( 'gulp-nice-package' ),
    mapStream       = require ( 'map-stream' ),
    lintSpaces      = require ( 'gulp-lintspaces' ),
    del             = require ( 'del' ),
    seq             = require ( 'run-sequence' ),
    fs              = require ( 'fs' ),
    os              = require ( 'os' ),
    opts            = require ( './options.json' ),
    isValid;

process.on ( 'exit', function () {
    process.nextTick ( function () {
        process.exit ( 1 );
    } );
} );

gulp.task ( 'validator.package', function () {
    return gulp
        .src ( './package.json' )
        .pipe ( validatePackage () )
        .pipe ( mapStream ( function ( file, cb ) {
            isValid = file.nicePackage.valid;
            cb ( null, file );
        } ) )
        .on ( 'end', function () {
            if ( !isValid ) {
                process.emit ( 'exit' );
            }
        } );
} );

gulp.task ( 'toc', function () {
    return gulp
        .src ( './README.md' )
        .pipe ( toc ( {
            title : '## Table of Contents'
        } ) )
        .pipe ( gulp.dest ( './' ) );
} );

gulp.task ( 'check.paths', function ( cb ) {

    if ( opts.installPaths[os.platform ()] ) {

        var hasDir = false;

        opts.installPaths[os.platform ()].forEach ( function ( pa ) {

            pa = pa.replace ( /\{homeDir}/g, os.homedir () );

            try {
                if ( fs.statSync ( pa ).isDirectory () ) {
                    console.info ( 'Found ' + pa );
                    hasDir = true;
                }
            } catch ( e ) {}

        } );

        if ( hasDir ) {
            cb ();
        } else {
            console.error ( 'Package cant be installed. Path for install not found' );
            process.exit ( 1 );
        }

    } else {
        console.error ( 'Sorry, your operating system is not supported.' );
        process.exit ( 1 );
    }

} );

gulp.task ( 'collect.snippets', function () {
    return gulp
        .src ( opts.snippets )
        .pipe ( gulp.dest ( './.snippets/' ) );
} );

gulp.task ( 'package.build', ['collect.snippets'], function () {
    return gulp
        .src ( './.snippets/*.sublime-snippet' )
        .pipe ( zip ( opts.namePackage + '.sublime-package' ) )
        .pipe ( gulp.dest ( './.temp/' ) );
} );

gulp.task ( 'package.copy', function ( cb ) {

    if ( opts.installPaths[os.platform ()] ) {

        var hasDir = false;

        opts.installPaths[os.platform ()].forEach ( function ( pa ) {

            pa = pa.replace ( /\{homeDir}/g, os.homedir () );

            try {
                if ( fs.statSync ( pa ).isDirectory () ) {
                    gulp
                        .src ( './.temp/' + opts.namePackage + '.sublime-package' )
                        .pipe ( gulp.dest ( pa ) );

                    hasDir = true;
                    console.info ( 'Installed in: ' + pa )
                }
            } catch ( e ) {}

        } );

        if ( hasDir ) {
            cb ();
        } else {
            console.error ( 'Application «Sublime Text» path not found' );
            process.exit ( 1 );
        }

    } else {
        console.error ( 'Sorry, your operating system is not supported.' );
        process.exit ( 1 );
    }


} );

gulp.task ( 'cleansing.garbage', function ( cb ) {
    del ( opts.garbage )
        .then ( function () {
            cb ();
        } );
} );

gulp.task ( 'package.install', function ( cb ) {
    seq ( 'check.paths', 'package.build', 'package.copy', 'cleansing.garbage', cb );
} );

gulp.task ( 'lint.spaces', function () {
    return gulp
        .src ( [
            './*.js',
            './*.json',
            './*.md',
            './**/*.sublime-snippet'
        ] )
        .pipe ( lintSpaces ( { editorconfig : './.editorconfig' } ) )
        .pipe ( lintSpaces.reporter () );
} );

gulp.task ( 'tests', function ( cb ) {
    seq ( 'validator.package', 'lint.spaces', 'package.build', 'cleansing.garbage', cb );
} );