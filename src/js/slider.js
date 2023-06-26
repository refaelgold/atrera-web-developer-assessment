document.addEventListener("DOMContentLoaded", function() {

    let slideIndex = 1;

function showImage(n) {
    // or Display the first Image
    'use strict';
    var slide = document.getElementsByClassName('slides'),
        dots = document.getElementsByClassName('dots'),
        i;
    if (n > slide.length) { // to prevent larger values than the slide length
        slideIndex = 1;
    }

    if (n < 1) { // to avoide negative values
        slideIndex = slide.length;
    }

    for (i = 0; i < slide.length; i++) { // to make other images display: none
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';

    for (i = 0; i < dots.length; i++) { // to remove the active class from other dots
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex - 1].className += ' active';
}

showImage(slideIndex);

function currentSlide(n) { // for Slide Bullets Selection
    'use strict';
    showImage(slideIndex = n);
}

// slider looping
    let a = 2;
    setInterval(timer, 3000);

    function timer() {
        console.log(a);
        currentSlide(a)
        if (a === 3) {
            currentSlide(a)
            a = 1;
            return;
        }
        a += 1;
    }
});