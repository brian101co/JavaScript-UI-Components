(function(){
    let circles = document.querySelectorAll('.fa-circle');
    let slider = document.querySelectorAll('img');
    let translateImage = 0;
    let i = 0;

    /* Setting Initial Styles for Location Circles */
    circles[0].style.color = "#333";
    circles[0].style.opacity = "1";

    document.getElementById('control-right').addEventListener('click', function(){
        translateImage = translateImage + 100;
        i++;
        if (translateImage <= 200){
            slider.forEach(element => {
                element.style.transform  = `translateX(-${translateImage}%)`;
            });
        } else {
            translateImage = 200;
        }

        if (i < circles.length) {
            circles[i].style.color = "#333";
            circles[i].style.opacity = "1";
            circles[i-1].style.color = "rgb(184, 180, 180)";
            circles[i-1].style.opacity = "0.5";
        } else {
            i = circles.length - 1;
        }

    })

    document.getElementById('control-left').addEventListener('click', function(){
        translateImage = translateImage - 100;
        i--;
        slider.forEach(element => {
            element.style.transform = `translateX(-${translateImage}%)`;
        });

        if(translateImage == -100) {
            translateImage = 0;
        }

        if (i >= 0) {
            circles[i].style.color = "#333";
            circles[i].style.opacity = "1";
            circles[i+1].style.color = "rgb(184, 180, 180)";
            circles[i+1].style.opacity = "0.5";
        } else {
            i = 0;
        }

    }) 
})()