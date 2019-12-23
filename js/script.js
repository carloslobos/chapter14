var elem = document.querySelector('.main-carousel');


//10

var flkty = new Flickity('.main-carousel', {
    hash: true,
    pageDots: false,
});



// 11
var buttonReset = document.querySelector('.button-reset');
var firstSlide = document.querySelector('#carousel-cell1');

buttonReset.addEventListener('click', function(event) {

    flkty.select(0);
});

//12
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});