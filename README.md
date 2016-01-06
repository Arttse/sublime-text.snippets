# Sublime Text Snippets

> Useful things for a faster, pleasant experience

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [How to install](#how-to-install)
- [JavaScript](#javascript)
  - [jQuery](#jquery)
    - [[jqi] jquery.isolated](#jqi-jqueryisolated)
    - [[jqir] jquery.isolated.ready](#jqir-jqueryisolatedready)
    - [[jqr] jquery.ready](#jqr-jqueryready)
    - [[jqrf] jquery.ready.full](#jqrf-jqueryreadyfull)
  - [Console](#console)
    - [[ca] console.assert](#ca-consoleassert)
    - [[cc] console.count](#cc-consolecount)
    - [[cd] console.dir](#cd-consoledir)
    - [[cdx] console.dirxml](#cdx-consoledirxml)
    - [[ce] console.error](#ce-consoleerror)
    - [[cg] console.group](#cg-consolegroup)
    - [[cgc] console.groupCollapsed](#cgc-consolegroupcollapsed)
    - [[cge] console.groupEnd](#cge-consolegroupend)
    - [[ci] console.info](#ci-consoleinfo)
    - [[cl] console.log](#cl-consolelog)
    - [[cp] console.profile](#cp-consoleprofile)
    - [[cpe] console.profileEnd](#cpe-consoleprofileend)
    - [[ct] console.table](#ct-consoletable)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to install

Snippets can be stored under any package’s folder.
You can save them to your `Packages/User` folder.

Example for `Sublime Text 3`:
- In `Linux` default path is `/home/{username}/.config/sublime-text-3/Packages/User`.
- In `Windows` default path is `C:\Users\{username}\AppData\Roaming\Sublime Text 3\Packages\User`


## JavaScript

### jQuery

> jQuery is a fast, small, and feature-rich JavaScript library.
It makes things like HTML document traversal and manipulation, event handling, animation,
and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
With a combination of versatility and extensibility, jQuery has changed the way that
millions of people write JavaScript.

#### [jqi] jquery.isolated

[View Source](snippets/JavaScript/jQuery/jquery.isolated.sublime-snippet)

From `jqi` to:

```javascript
(function($){})(jQuery);
```

#### [jqir] jquery.isolated.ready

[View Source](snippets/JavaScript/jQuery/jquery.isolated.ready.sublime-snippet)

From `jqir` to:

```javascript
(function($){
/*-----------------------------------------*/


$(function(){});


/*-----------------------------------------*/
})(jQuery);
```

#### [jqr] jquery.ready

[View Source](snippets/JavaScript/jQuery/jquery.ready.sublime-snippet)

From `jqr` to:

```javascript
$(function(){});
```

#### [jqrf] jquery.ready.full

[View Source](snippets/JavaScript/jQuery/jquery.ready.full.sublime-snippet)

From `jqrf` to:

```javascript
$(document).ready(function(){});
```

### Console

> The console object provides access to the browser's debugging console.
The specifics of how it works vary from browser to browser,
but there is a de facto set of features that are typically provided.

#### [ca] console.assert

[View Source](snippets/JavaScript/console/console.assert.sublime-snippet)

From `ca` to:

```javascript
console.assert();
```

#### [cc] console.count

[View Source](snippets/JavaScript/console/console.count.sublime-snippet)

From `cc` to:

```javascript
console.count();
```

#### [cd] console.dir

[View Source](snippets/JavaScript/console/console.dir.sublime-snippet)

From `cd` to:

```javascript
console.dir();
```

#### [cdx] console.dirxml

[View Source](snippets/JavaScript/console/console.dirxml.sublime-snippet)

From `cdx` to:

```javascript
console.dirxml();
```

#### [ce] console.error

[View Source](snippets/JavaScript/console/console.error.sublime-snippet)

From `ce` to:

```javascript
console.error();
```

#### [cg] console.group

[View Source](snippets/JavaScript/console/console.group.sublime-snippet)

From `cg` to:

```javascript
console.group();
```

#### [cgc] console.groupCollapsed

[View Source](snippets/JavaScript/console/console.groupCollapsed.sublime-snippet)

From `cgc` to:

```javascript
console.groupCollapsed();
```

#### [cge] console.groupEnd

[View Source](snippets/JavaScript/console/console.groupEnd.sublime-snippet)

From `cge` to:

```javascript
console.groupEnd();
```

#### [ci] console.info

[View Source](snippets/JavaScript/console/console.info.sublime-snippet)

From `ci` to:

```javascript
console.info();
```

#### [cl] console.log

[View Source](snippets/JavaScript/console/console.log.sublime-snippet)

From `cl` to:

```javascript
console.log();
```

#### [cp] console.profile

[View Source](snippets/JavaScript/console/console.profile.sublime-snippet)

From `cp` to:

```javascript
console.profile();
```

#### [cpe] console.profileEnd

[View Source](snippets/JavaScript/console/console.profileEnd.sublime-snippet)

From `cpe` to:

```javascript
console.profileEnd();
```

#### [ct] console.table

[View Source](snippets/JavaScript/console/console.table.sublime-snippet)

From `ct` to:

```javascript
console.table();
```