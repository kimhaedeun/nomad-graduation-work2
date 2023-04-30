const images=["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");
console.log(bgImage);

bgImage.src=`img/${chosenImage}`;
bgImage.className=`bgImage`;
document.body.appendChild(bgImage);