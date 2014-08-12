# jQuery.semanticScrollTo

Many plugins of this type forget the semantic of anchors, breaking their functionality.

semanticScrollTo respect the semantic of anchors on link tag.

See a [demo](http://viniciusalmeida.github.io/jQuery.semanticScrollTo/demo)

### Example

Markup example:
```html
<ul id="menu">
  <li><a href="#">Top</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#links">Links</a></li>
</ul>

<h2 id="about">Lorem</h2>
<h2 id="links">Ipsum</h2>
```

Starting the plugin:
```javascript
$(document).semanticScrollTo();
// or
$('#menu').semanticScrollTo();
```

See the [example page markup](https://github.com/viniciusalmeida/jQuery.semanticScrollTo/blob/master/demo/index.html)

### Options

|Attribute|Type|Description|
|:--------|:---|:----------|
|```animationSpeed```|```integer```|Scroll animation speed on milliseconds|

*Made by [@vimoding](https://twitter.com/vimoding)*
