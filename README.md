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
    - [[ce] console.error](#ce-consoleerror)
    - [[cl] console.log](#cl-consolelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to install

Snippets can be stored under any package’s folder.
You can save them to your `Packages/User` folder.

Example for `Sublime Text 3`:
- In `Linux` default path is `/home/{username}/.config/sublime-text-3/Packages/User`.
- In `Windows` default path is `C:\Users\{username}\AppData\Roaming\Sublime Text 3\Packages\User`


## JavaScript

### jQuery

#### [jqi] jquery.isolated

[View Source](snippets/JavaScript/jQuery/jquery.isolated.sublime-snippet)

From:

```
jqi
```

To:

```javascript
(function($){})(jQuery);
```

#### [jqir] jquery.isolated.ready

[View Source](snippets/JavaScript/jQuery/jquery.isolated.ready.sublime-snippet)

From:

```
jqir
```

To:

```javascript
(function($){
/*-----------------------------------------*/


$(function(){});


/*-----------------------------------------*/
})(jQuery);
```

#### [jqr] jquery.ready

[View Source](snippets/JavaScript/jQuery/jquery.ready.sublime-snippet)

From:

```
jqr
```

To:

```javascript
$(function(){});
```

#### [jqrf] jquery.ready.full

[View Source](snippets/JavaScript/jQuery/jquery.ready.full.sublime-snippet)

From:

```
jqrf
```

To:

```javascript
$(document).ready(function(){});
```

### Console

#### [ca] console.assert

[View Source](snippets/JavaScript/console/console.assert.sublime-snippet)

From:

```
ca
```

To:

```javascript
console.assert();
```

#### [cc] console.count

[View Source](snippets/JavaScript/console/console.count.sublime-snippet)

From:

```
cc
```

To:

```javascript
console.count();
```

#### [ce] console.error

[View Source](snippets/JavaScript/console/console.error.sublime-snippet)

From:

```
ce
```

To:

```javascript
console.error();
```

#### [cl] console.log

[View Source](snippets/JavaScript/console/console.log.sublime-snippet)

From:

```
cl
```

To:

```javascript
console.log();
```