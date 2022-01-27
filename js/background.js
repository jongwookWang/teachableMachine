let images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

let chosenImage = images[Math.floor(Math.random()*images.length)];

let bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.width =500;

document.body.appendChild(bgImage);