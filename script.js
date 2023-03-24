//fullscreen button
let fullscreenBtn = document.getElementById("fullscreen-btn");

fullscreenBtn.addEventListener("click", function () {
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

//reset button & action(figure out)
let resetBtn = document.getElementById('reset-Btn');
const scoreDisplay = document.getElementById('scoreDisplay'); 

let score = 0;

resetBtn.addEventListener('click', function() {
  score = 0; 
  scoreDisplay.textContent = score; 
});


