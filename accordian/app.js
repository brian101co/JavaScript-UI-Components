(function(){
    let titles = document.querySelectorAll('.title');

    Array.from(titles).forEach((title) => {
        title.addEventListener('click', (event) => {
            if (event.target.nextElementSibling.classList.contains('hide')) {
                event.target.nextElementSibling.classList.remove('hide');
            } else {
                event.target.nextElementSibling.classList.add('hide');
            }
        });
    });
})()