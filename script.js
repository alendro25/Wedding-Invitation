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
const bgmContainer = document.querySelector("#backsound");
const myAudio = document.querySelector("#myAudio");
const bgmIcon = document.querySelector("#backsound i");

var state = 0;
function playPause() {
  if (state == 1) {
    bgmIcon.classList.add("bi-music-note-list");
    bgmIcon.classList.remove("bi-play-circle-fill");
    bgmIcon.style.fontSize = "1.5rem";
    myAudio.muted = false;
    state = 0;
  } else {
    bgmIcon.classList.remove("bi-music-note-list");
    bgmIcon.classList.add("bi-play-circle-fill");
    bgmIcon.style.fontSize = "2rem";
    myAudio.muted = "true";
    state = 1;
  }
}

function play() {
  myAudio.play();

  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  bgmContainer.style.display = "flex";
  // localStorage.setItem("opened", "true");
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

disableScroll();
// if (!localStorage.getItem("opened")) {
// }

// JS untuk mengambil parameter string di URL
const urlParams = new URLSearchParams(window.location.search);
const pronoun = urlParams.get("p") || "";
const nama = urlParams.get("n") || "Bapak/Ibu/Saudara/i";
// console.log(nama);

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronoun} ${nama},`;

document.querySelector("#nama").value = nama;
