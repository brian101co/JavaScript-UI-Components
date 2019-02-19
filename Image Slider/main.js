(function(){
    /* Storing Image Paths to Cycle Through */
    let images = ["images/photo1.jpg",
                  "images/photo2.jpg",
                  "images/photo3E.png"];
    
    /* Grabbing Location Circle Elements and Image Element */
    let circles = document.querySelectorAll('.fa-circle');
    let slider = document.getElementById('image-container');

    /* Setting Counter */
    let i = 0;

    /* Setting Initial Styles for Location Circles */
    circles[0].style.color = "#333";
    circles[0].style.opacity = "1";

    /* Adding the Click Event to Slider Navigation Buttons */
    document.getElementById('control-left').addEventListener('click', function(){
        i--;
        
        /* Condition to Reset Counter when the Array Limit has been reached */
        if (i < 0) {
            i = images.length - 1;
        }

        /* Adding Styles to Current Image Location */
        circles[i].style.color = "#333";
        circles[i].style.opacity = "1";

        /* Resetting Previous Image Location Styles */
        if (i !== 2) {
            circles[i+1].style.color = "rgb(184, 180, 180)";
            circles[i+1].style.opacity = "0.5";
        } else {
            circles[0].style.color = "rgb(184, 180, 180)";
            circles[0].style.opacity = "0.5";
        }
        /* Setting New Slider Image */
        slider.style.transform = "translateX(-100%)";
        slider.src = images[i]
    });

    document.getElementById('control-right').addEventListener('click', function(){
        i++;

        /* Condition To Reset Counter When the Array Limit is Reached */
        if (i > 2) {
            i = 0;
        }
        
        /* Setting Current Image Location Styles */
        circles[i].style.color = "#333";
        circles[i].style.opacity = "1";

        /* Resetting Previous Image Location Styles */
        if (i != 0) {
            circles[i-1].style.color = "rgb(184, 180, 180)";
            circles[i-1].style.opacity = "0.5";
        } else {
            circles[circles.length-1].style.color = "rgb(184, 180, 180)";
            circles[circles.length-1].style.opacity = "0.5";
        }

        /* Setting New SLider Image */
        slider.src = images[i];
    })

})()