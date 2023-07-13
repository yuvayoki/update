//hamburger active //
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 150) {
    header.style.backgroundColor = "rgb(78 128 210)";
  } else {
    header.style.backgroundColor = "";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

//nav bar ul li a active and scroll screen color change in nav bar//
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav ul a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// slide image //
let slideIndex = 0;
showSlides();

function showSlides() {
  // let i;
  // let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // slideIndex++;
  // if (slideIndex > slides.length) {
  //   slideIndex = 1;
  // }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Add click event listeners to the dots
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    slideIndex = i;
    showSlides();
  });
}
// refresh page image loader//
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader);
}

window.onload = fadeOut();
