const stickyTop = document.querySelector(".sticky-top");
const hamburger = document.querySelector(".navbar-toggler");
const btnClose = document.querySelector(".btn-close");
const offcanvas = document.querySelector(".offcanvas");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

btnClose.addEventListener("click", function () {
  stickyTop.style.overflow = "hidden";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

const myAudio = document.querySelector("#myAudio");

var state = 0;
function playPause() {
  if (state == 1) {
    myAudio.muted = false;
    state = 0;
    console.log("Unmuted" + state);
  } else {
    myAudio.muted = "true";
    state = 1;
    console.log("Muted" + state);
  }
  console.log("Kondisi terakhir : " + state);
}
