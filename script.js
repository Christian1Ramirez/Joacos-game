//fullscreen button
let fullScreenBtn = document.getElementById("fullscreen-btn");

fullScreenBtn.addEventListener("click", function () {
 let docElm = document.documentElement;
 if (docElm.requestFullscreen) {
  docElm.requestFullscreen();
 } else if (docElm.webkitRequestFullScreen) {
  docElm.webkitRequestFullScreen();
 } else if (docElm.mozRequestFullScreen) {
  docElm.mozRequestFullScreen();
 } else if (docElm.msRequestFullscreen) {
  docElm.msRequestFullscreen();
 }
});

//reset button & action
// let resetBtn = document.getElementById("reset-btn");
// let scoreDisplay = document.getElementById("scoreDisplay");
// let progressBar = document.getElementById("progress-bar");

// let score = 0;

// resetBtn.addEventListener("click", function () {
//  score = 0;
//  scoreDisplay.textContent = score;
//  progressBar.style.width = "0%";
// });


//IMAGE DISPLAYED
const imageArray = [
 'Image_reference/earth.png',
 'Image_reference/saturn.png'
];

let currentImageIndex = 0;
let currentImage = document.createElement('img');
currentImage.src = imageArray[currentImageIndex];
currentImage.style.width = '22rem';
currentImage.style.height = '20rem';
document.getElementById('image-array').appendChild(currentImage);

let keys = document.querySelectorAll('.key');
let input = document.getElementById('input');
let earthLetters = 'EARTH';
let currentIndex = 0;

keys.forEach(function(key) {
key.addEventListener('click', function() {
 let letter = key.textContent;
 
 if (letter === earthLetters[currentIndex]) {
  input.value += letter;
  currentIndex++;

  if (currentIndex === earthLetters.length) {
    currentIndex = 0;
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    currentImage.src = imageArray[currentImageIndex];
  }
 } else {
   input.value = '';
   currentIndex = 0;
 }
});
});

//play button(fix)
const playBtn = document.getElementById("play-btn");
const mySound = document.getElementById("my-Sound");

playBtn.addEventListener("click", function () {
  if (mySound.paused) {
    mySound.play();
  } else {
    mySound.pause();
  }
});
