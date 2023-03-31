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
  currentImage.src = planetArray[currentImageIndex];
  input.value = "";
  currentIndex = 0;
  document.getElementById("correct-msg").textContent = "";
  let reservoir = document.getElementById("reservoir");
  reservoir.style.background = "transparent";
  correctGuesses = 0;
});

//IMAGE DISPLAYED
let planetArray = [
  "Image_reference/earth.png",
  "Image_reference/saturn.png",
  "Image_reference/mars.png",
  "Image_reference/uranus.png",
];

let currentImageIndex = 0;
let currentImage = document.createElement("img");
currentImage.src = planetArray[currentImageIndex];
currentImage.style.width = "25rem";
currentImage.style.height = "25rem";
document.getElementById("planet-array").appendChild(currentImage);

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
          let reservoir = document.getElementById("reservoir");
          correctGuesses++;
          if (correctGuesses === planetWords.length) {
            document.getElementById("winner-msg").textContent = "BLAST OFF!";
          } else {
            document.getElementById("correct-msg").textContent = "CORRECT!";
          }

          // Filling the reservoir
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
            currentImageIndex = (currentImageIndex + 1) % planetArray.length;
            currentImage.src = planetArray[currentImageIndex];
            document.getElementById("correct-msg").textContent = "";
            document.getElementById("winner-msg").textContent = "";
            input.value = "";

            // Reseting the reservoir bar
            if (correctGuesses === planetWords.length) {
             document.querySelector(".rocket1").src = "Image_reference/rocket-overlay.jpg";
             setTimeout(function () {
               reservoir.style.background = "transparent";
               correctGuesses = 0;
               document.querySelector(".rocket1").src = "Image_reference/rocket1.jpg";
             }, 5000);
             reservoir.style.background = "transparent"; 
           }
          }, 2700);
        }, 0);
      }
      key.style.backgroundColor = "#00FF7F";
      setTimeout(function () {
        key.style.backgroundColor = "#008080";
      }, 1500);
    } else {
      key.setAttribute("id", "shake");
      key.style.backgroundColor = "#FF0000";
      key.style.color = "#FFF";
      setTimeout(function () {
        key.setAttribute("id", "");
        key.style.backgroundColor = "#008080";
        key.style.color = "#FFF";
      }, 700);
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