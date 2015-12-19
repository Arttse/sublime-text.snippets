var gulp = require ( 'gulp' ),
    toc  = require ( 'gulp-doctoc' );

gulp.task ( 'toc', function () {
    return gulp
        .src ( './README.md' )
        .pipe ( toc ( {
            title : '## Table of Contents'
        } ) )
        .pipe ( gulp.dest ( './' ) );
} );