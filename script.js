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

// reset button & action
let resetBtn = document.getElementById("reset-btn");
let scoreDisplay = document.getElementById("scoreDisplay");
let progressBar = document.getElementById("progress-bar");

let score = 0;

resetBtn.addEventListener("click", function () {
 score = 0;
 scoreDisplay.textContent = score;
 progressBar.style.width = "0%";
});


//IMAGE DISPLAYED
let imageArray = [
 'Image_reference/earth.png',
 'Image_reference/saturn.png',
 'Image_reference/mars.png',
 'Image_reference/uranus.png'
];

let currentImageIndex = 0;
let currentImage = document.createElement('img');
currentImage.src = imageArray[currentImageIndex];
currentImage.style.width = '22rem';
currentImage.style.height = '20rem';
document.getElementById('image-array').appendChild(currentImage);

let keys = document.querySelectorAll('.key');
let input = document.getElementById('input-bar');
let planetWords = ['EARTH', 'SATURN', 'MARS', 'URANUS'];
let currentIndex = 0;

keys.forEach(function(key) {
 key.addEventListener('click', function() {
   let letter = key.textContent;
   let word = planetWords[currentImageIndex];

   if (letter === word[currentIndex]) {
     input.value += letter;
     currentIndex++;

     if (currentIndex === word.length) {
       input.value = word;
       currentIndex = 0;
       setTimeout(function() {
         document.getElementById('correct-msg').textContent = 'CORRECT!';
         setTimeout(function() {
           currentImageIndex = (currentImageIndex + 1) % imageArray.length;
           currentImage.src = imageArray[currentImageIndex];
           document.getElementById('correct-msg').textContent = '';
           input.value = ''; 
         }, 2000);
       }, 0);
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
