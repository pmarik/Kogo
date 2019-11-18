"use strict";

function init(){
   
}

document.addEventListener("DOMContentLoaded", function(){

    //play animations on page load
    window.setTimeout(() => {
        let heroTarget = document.getElementsByClassName('hero-anim-target');
        heroTarget[0].classList.add('hero-anim');
        heroTarget[1].classList.add('hero-info-anim');
    }, 200)
    
    init();
  });
