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

// Restart button
let restartBtn = document.getElementById("reset-btn");
restartBtn.addEventListener("click", function () {
  currentImageIndex = 0;
  currentImage.src = imageArray[currentImageIndex];
  input.value = "";
  currentIndex = 0;
  document.getElementById("correct-msg").textContent = "";
  let reservoir = document.getElementById("reservoir");
  reservoir.style.background = "transparent";
  correctGuesses = 0;
});

//IMAGE DISPLAYED
let imageArray = [
  "Image_reference/earth.png",
  "Image_reference/saturn.png",
  "Image_reference/mars.png",
  "Image_reference/uranus.png",
];

let currentImageIndex = 0;
let currentImage = document.createElement("img");
currentImage.src = imageArray[currentImageIndex];
currentImage.style.width = "22rem";
currentImage.style.height = "20rem";
document.getElementById("image-array").appendChild(currentImage);

//words typed
let keys = document.querySelectorAll(".key");
let input = document.getElementById("input-bar");
let planetWords = ["EARTH", "SATURN", "MARS", "URANUS"];
let currentIndex = 0;
let correctGuesses = 0;

keys.forEach(function (key) {
  key.addEventListener("click", function () {
    let letter = key.textContent;
    let word = planetWords[currentImageIndex];

    if (letter === word[currentIndex]) {
      input.value += letter;
      currentIndex++;

      if (currentIndex === word.length) {
        input.value = word;
        currentIndex = 0;
        setTimeout(function () {
          document.getElementById("correct-msg").textContent = "CORRECT!";

          // Filling the reservoir
          let reservoir = document.getElementById("reservoir");
          correctGuesses++;
          let heightToFill = reservoir.offsetHeight * (0.25 * correctGuesses);
          let filledHeight = 0;
          let intervalId = setInterval(function () {
            if (filledHeight >= heightToFill) {
              clearInterval(intervalId);
            } else {
              filledHeight += 5;
              reservoir.style.background = `linear-gradient(to top, #f5c156 ${filledHeight}px, transparent ${filledHeight}px)`;
            }
          }, 50);

          setTimeout(function () {
            currentImageIndex = (currentImageIndex + 1) % imageArray.length;
            currentImage.src = imageArray[currentImageIndex];
            document.getElementById("correct-msg").textContent = "";
            input.value = "";

            // Reseting the reservoir bar
            if (correctGuesses === planetWords.length) {
              setTimeout(function () {
                reservoir.style.background = "transparent";
                correctGuesses = 0;
              }, 500);
            }
          }, 2700);
        }, 0);
      }
    } 
  });
});

//sounds bites
let soundArray = [
  "Sound-bites/earth.wav",
  "Sound-bites/saturn.wav",
  "Sound-bites/mars.wav",
  "Sound-bites/uranus.wav",
];

const playBtn = document.getElementById("play-btn");
const mySound = document.getElementById("my-Sound");

playBtn.addEventListener("click", function () {
  if (mySound.paused) {
    mySound.src = soundArray[currentImageIndex];
    mySound.play();
  } else {
    mySound.pause();
  }
});
