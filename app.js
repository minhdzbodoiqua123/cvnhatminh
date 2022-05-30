// DOM
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const slide_show = document.querySelector("#slide_show");
const dau_menu = document.querySelector("#dau_menu");
const dau_x = document.querySelector("#dau_x");

// Event
let isOpen = true;
menuIcon.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  dau_menu.classList.toggle("hidden");
  dau_x.classList.toggle("hidden");
});

// // slide_show
const images = [
  "./images/slide1.jpeg",
  "./images/slide2.jpeg",
  "./images/slide3.jpeg"
];
var i = 0;
function slide() {
  if (i < images.length - 1) {
    i++;
    slide_show.src = images[i];
  } else {
    i = 0;
    slide_show.src = images[i];
  }
}

setInterval(function () {
  slide();
}, 2500);
