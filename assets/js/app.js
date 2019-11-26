"use strict";
require('intersection-observer');

function init(){
  
    let thresholdNum = 0.8
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: thresholdNum
    }

    let stem2 = document.getElementById('stem2');
    

    let callback = function(entries, observer) {
        entries.forEach(entry => {
          if(entry.intersectionRatio > thresholdNum){
            document.getElementById('vine2').classList.add('theOverlay2');
            document.getElementsByClassName('svgContain')[1].setAttribute("style", "visibility: visible;");

            observer.unobserve(stem2);
          }
        }); 
      }
      
   

    let observer = new IntersectionObserver(callback, options);
    observer.observe(stem2);
}

document.addEventListener("DOMContentLoaded", function(){

    //play animations on page load
    window.setTimeout(() => {
        let heroTarget = document.getElementsByClassName('hero-anim-target');
        heroTarget[0].classList.add('hero-anim');
        heroTarget[1].classList.add('hero-info-anim');

        //Add class to animate SVG, initial start state is hidden until content loaded
        document.getElementById('vine1').classList.add('theOverlay1');
        document.getElementsByClassName('svgContain')[0].setAttribute("style", "visibility: visible;");

        //top stem leaf animations
        let leafList = document.getElementsByClassName('stem1_leaf');

        for(let i = 0; i < leafList.length; i++){
          leafList[i].classList.add(`leaf1_${i+1}`)
        };


    }, 200);
    
    init();
  });
