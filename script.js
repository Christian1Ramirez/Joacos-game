// Fullscreen button
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
let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function () {
  clearTimeout(hintTimeout);
  removeHint();
  hintTimeout = setTimeout(addHint, 8100);
  document.getElementById("reservoir").style.background = "transparent";
  currentImageIndex = 0;
  currentImage.src = planetArray[currentImageIndex];
  mySound.pause();
  mySound.currentTime = 0;
  input.value = "";
  currentIndex = 0;
  correctGuesses = 0;
  document.querySelector(".rocket1").src = "Image_reference/rocket1.jpg";
  document.getElementById("winner-msg").textContent = "";
});

// Image displayed
let planetArray = [
  "Image_reference/earth.png",
  "Image_reference/saturn.png",
  "Image_reference/mars.png",
  "Image_reference/uranus.png",
];

let currentImageIndex = 0;
let currentImage = document.createElement("img");
currentImage.src = planetArray[currentImageIndex];
currentImage.style.width = "20rem";
currentImage.style.height = "20rem";
document.getElementById("planet-array").appendChild(currentImage);

// Letters clicked
let keys = document.querySelectorAll(".key");
let input = document.getElementById("input-bar");
let planetWords = ["EARTH", "SATURN", "MARS", "URANUS"];
let currentIndex = 0;
let correctGuesses = 0;
let hintTimeout = setTimeout(addHint, 8100);
let style = document.createElement("style");
style.innerHTML = ".pulse {background-color: sandybrown; color:red;}";
document.head.appendChild(style);

// Add a hint by pulsing the correct key
function addHint() {
  let word = planetWords[currentImageIndex];
  let correctKey = Array.from(keys).find(
    (key) => key.textContent === word[currentIndex]
  );

  if (correctKey) {
    correctKey.classList.add("pulse");
  }
}

function removeHint() {
  let word = planetWords[currentImageIndex];
  let correctKey = Array.from(keys).find(
    (key) => key.textContent === word[currentIndex]
  );

  if (correctKey) {
    correctKey.classList.remove("pulse");
  }
}

keys.forEach(function (key) {
  key.addEventListener("click", function () {
    clearTimeout(hintTimeout);

    let letter = key.textContent;
    let word = planetWords[currentImageIndex];

    if (letter === word[currentIndex]) {
      removeHint();
      input.value += letter;
      currentIndex++;

      key.classList.add("correct-key");
      setTimeout(function () {
        key.classList.remove("correct-key");
      }, 1500);

      if (currentIndex === word.length) {
        input.value = word;
        currentIndex = 0;
        updateGameProgress();
      }
    } else {
      key.classList.add("wrong-key");
      setTimeout(function () {
        key.classList.remove("wrong-key");
      }, 700);
    }
    hintTimeout = setTimeout(addHint, 8100);
  });
});

function updateGameProgress() {
 let reservoir = document.getElementById("reservoir");
 correctGuesses++;

 if (correctGuesses === planetWords.length) {
   document.getElementById("winner-msg").textContent = "BLAST OFF!";
 } else {
   document.getElementById("correct-msg").textContent = "CORRECT!";
 }

  // Update the reservoir bar
  let heightToFill = reservoir.offsetHeight * (0.25 * correctGuesses);
  let filledHeight = 0;
  let intervalId = setInterval(function () {
    if (filledHeight >= heightToFill) {
      clearInterval(intervalId);
    } else {
      filledHeight += 5;
      reservoir.style.background = `linear-gradient(to top, #f5c156 ${filledHeight}px, transparent ${filledHeight}px)`;
    }
  }, 40);

  setTimeout(function () {
    currentImageIndex = (currentImageIndex + 1) % planetArray.length;
    currentImage.src = planetArray[currentImageIndex];
    document.getElementById("correct-msg").textContent = "";
    document.getElementById("winner-msg").textContent = "";
    input.value = "";
    currentIndex = 0;

    // Resetting the game after blast off
    if (correctGuesses === planetWords.length) {
     document.querySelector(".rocket1").src =
       "Image_reference/rocket-overlay.jpg";
     document.querySelector(".rocket1").classList.add("blast-off");
     setTimeout(function () {
       reservoir.style.background = "transparent";
       correctGuesses = 0;
       document.querySelector(".rocket1").classList.remove("blast-off");
       document.querySelector(".rocket1").src = "Image_reference/rocket1.jpg";
     }, 4000);
     reservoir.style.background = "transparent";
   }
 }, 2700);
}

// Sound bites
let soundArray = [
  "Sound-bites/earth.wav",
  "Sound-bites/saturn.wav",
  "Sound-bites/mars.wav",
  "Sound-bites/uranus.wav",
];

let speakBtn = document.getElementById("speak-btn");
let mySound = document.getElementById("my-Sound");

speakBtn.addEventListener("click", function () {
  if (mySound.paused) {
    mySound.src = soundArray[currentImageIndex];
    mySound.play();
  } else {
    mySound.pause();
  }
});