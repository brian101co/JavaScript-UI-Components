(function(){
    let image = document.querySelector('.box img');
    let text = document.querySelector('.box p');
    let box = document.querySelector('.box');
    let cover = document.querySelector('.cover');
    let exit = document.querySelector('.exit-modal');

    image.addEventListener('click', (event) => {
        box.classList.add('center');
        text.classList.remove('hide');
        cover.classList.remove('hide');
        exit.classList.remove('hide')
    });

    exit.addEventListener('click', () => {
        box.classList.remove('center');
        text.classList.add('hide');
        cover.classList.add('hide');
        exit.classList.add('hide');
    });

})()
