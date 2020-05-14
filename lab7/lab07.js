const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

for(var i=0;i<works.length;i++) {
    var item = document.createElement("div");
    item.className = "item";

    var genre=document.createElement("h4");
    genre.innerHTML="Genre:"+works[i].tips;
    item.appendChild(genre);

    var content=document.createElement("div");
    content.className="inner-box";
    var author=document.createElement("h3");
    author.style.display="inline";
    author.innerHTML=works[i].author;
    var lifetime=document.createElement("h5");
    lifetime.style.display="inline";
    lifetime.style.marginLeft="1em";
    lifetime.innerHTML="lifetime"+works[i].lifetime;
    content.appendChild(author);
    content.appendChild(lifetime);
    item.appendChild(content);

    var photo=document.createElement("div");
    photo.className="inner-box";
    for(var j=0;j<works[i].photos.length; j++){
        if(j==0){
            var photoC=document.createElement("h3");
            photoC.innerHTML="Popular Photos";
            photo.appendChild(photoC);
        }
        var pic=document.createElement("img");
        pic.className="photo";
        pic.src=works[i].photos[j];
        photo.appendChild(pic);
    }
    item.appendChild(photo);

    var button=document.createElement("button");
    button.innerHTML="Visit";
    item.appendChild(button);

    var mid=document.body;
    mid.lastChild.appendChild(item);
}
