# jQuery.semanticScrollTo

Many plugins of this type forget the semantic of anchors, breaking their functionality.

semanticScrollTo respect the semantic of anchors on link tag.

### Example

Menu markup example:
```html
<ul id="menu">
  <li><a href="#">Top</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#links">Links</a></li>
</ul>
```

Starting the plugin:
```javascript
$('#menu').semanticScrollTo();
```

Or see the [example page](https://github.com/viniciusalmeida/jQuery.semanticScrollTo/blob/master/index.html)

### Options

|Attribute|Type|Description|
|:--------|:---|:----------|
|```animationSpeed```|```integer```|Scroll animation speed on milliseconds|

*Made by [@vimoding](https://twitter.com/vimoding)*
