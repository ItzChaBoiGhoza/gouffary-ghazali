let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}
function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}
function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("slide1");
    let dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";
    dots[slideIndex1-1].className += " active";
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slide2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
}
function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("slide3");
    let dots = document.getElementsByClassName("dot3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
}
function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("slide4");
    let dots = document.getElementsByClassName("dot4");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active";
}
function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("slide5");
    let dots = document.getElementsByClassName("dot5");
    if (n > slides.length) {slideIndex5 = 1}
    if (n < 1) {slideIndex5 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex5-1].style.display = "block";
    dots[slideIndex5-1].className += " active";
}

function mobileNavHome() {
  var x = document.getElementById("mobile-nav-home");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function mobileNavAbout() {
  var x = document.getElementById("mobile-nav-about");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


