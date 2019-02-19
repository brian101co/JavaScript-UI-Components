(function(){
    let slideValue = 0;

    let carousel = function() {
        let i;
        let slides = document.getElementsByClassName('slides');
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideValue++;
        if (slideValue > slides.length) {
            slideValue = 1;
        }

        slides[slideValue-1].style.display = "block";
        setTimeout(carousel, 2000);
    }

    carousel();
})()