const images = ["0.png", "1.png", "2.jpg", "3.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`

document.body.appendChild(bgImage);