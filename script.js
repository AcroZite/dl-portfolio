//Imports

//Main
const intro = document.getElementById("intro");
const topbar = document.getElementById("top-bar");
const downArrow = document.getElementById("down-arrow");

window.onload = fadeIn();
window.onload = translateDown();

//add fadein classes to elements
function fadeIn() {
  setTimeout(() => {
    intro.classList.add("fadein");
    topbar.classList.add("fadein");
    downArrow.classList.add("fadein");
  }, 300);
}

//add translatedown class to elements
function translateDown() {
  setTimeout(() => {
    intro.classList.add("translatedown");
    downArrow.classList.add("translatedown");
  }, 300);
}
