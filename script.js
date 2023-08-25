const stickyTop = document.querySelector(".sticky-top");
const hamburger = document.querySelector(".navbar-toggler");
const btnClose = document.querySelector(".btn-close");
const offcanvas = document.querySelector(".offcanvas");
// JS untuk OFFCANVAS
hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

btnClose.addEventListener("click", function () {
  stickyTop.style.overflow = "hidden";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// JS untuk BG Music
const myAudio = document.querySelector("#myAudio");

var state = 0;
function playPause() {
  if (state == 1) {
    myAudio.muted = false;
    state = 0;
  } else {
    myAudio.muted = "true";
    state = 1;
  }
}

function play() {
  myAudio.play();

  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
}

// JS untuk lock scrolling sebelum klik "Buka Undangan"
const rootElement = document.querySelector(":root");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}
