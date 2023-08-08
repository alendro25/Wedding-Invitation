const stickyTop = document.querySelector(".sticky-top");
const hamburger = document.querySelector(".navbar-toggler");
const btnClose = document.querySelector(".btn-close");
const backdrop = document.querySelector(".offcanvas-backdrop");
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
