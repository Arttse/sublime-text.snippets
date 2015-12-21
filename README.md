# Sublime Text Snippets

> Useful things for a faster, pleasant experience

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [How to install](#how-to-install)
- [JavaScript](#javascript)
  - [jQuery](#jquery)
    - [jquery.isolated](#jqueryisolated)
    - [jquery.isolated.ready](#jqueryisolatedready)
    - [jquery.ready](#jqueryready)
    - [jquery.ready.full](#jqueryreadyfull)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to install

Snippets can be stored under any package’s folder.
You can save them to your `Packages/User` folder.
Example for `Sublime Text 3`:
- In `Linux` default path is `/home/{username}/.config/sublime-text-3/Packages/User`.
- In `Windows` default path is `C:\Users\{username}\AppData\Roaming\Sublime Text 3\Packages\User`


## JavaScript

### jQuery

#### jquery.isolated

[View Source](snippets/JavaScript/jQuery/jquery.isolated.sublime-snippet)

From:

```
jqi
```

To:

```javascript
(function($){})(jQuery);
```

#### jquery.isolated.ready

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

#### jquery.ready

[View Source](snippets/JavaScript/jQuery/jquery.ready.sublime-snippet)

From:

```
jqr
```

To:

```javascript
$(function(){});
```

#### jquery.ready.full

[View Source](snippets/JavaScript/jQuery/jquery.ready.full.sublime-snippet)

From:

```
jqrf
```

To:

```javascript
$(document).ready(function(){});
```
