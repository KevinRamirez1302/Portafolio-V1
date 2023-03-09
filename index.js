document.querySelector(".menuHam").addEventListener("click", animatebar);

var line1bar = document.querySelector(".linea1")
var line2bar = document.querySelector(".linea2")
var line3bar = document.querySelector(".linea3")

function animatebar(){
    line1bar.classList.toggle("activeLinea1");
    line2bar.classList.toggle("activeLinea2");
    line3bar.classList.toggle("activeLinea3");
}



// Side bar

document.querySelector(".menuHam").addEventListener("click", sideBarExpand);

var sideBar = document.querySelector(".containerMenu")

function sideBarExpand (){
    sideBar.classList.toggle("containerSide");
}


// Scroll animation

$(function() {
    $(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $(".animado").addClass("opacidad");//.fadeOut();
  } else {
    $(".animado").addClass("opacidad");//.fadeIn();
  }
    });
  });

