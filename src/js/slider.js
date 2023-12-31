'use strict';
let slideIndex = 1;

 function currentSlide(n) { // for Slide Bullets Selection
    'use strict';
     sliderInstance.showImage(slideIndex = n);
}

const sliderInstance = {
    showImage(n) {
        // or Display the first Image
        'use strict';
        let slide = document.getElementsByClassName('slides'),
            dots = document.getElementsByClassName('dots'),
            i;
        if (n > slide.length) { // to prevent larger values than the slide length
            slideIndex = 1;
        }

        if (n < 1) { // to avoid negative values
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
}



document.addEventListener("DOMContentLoaded", function() {

    let slideIndex = 1;
    sliderInstance.showImage(slideIndex);

    // slider looping
    let a = 2;
    setInterval(timer, 3000);

    function timer() {
        currentSlide(a)
        if (a === 3) {
            currentSlide(a)
            a = 1;
            return;
        }
        a += 1;
    }
});