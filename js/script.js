var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});

// 10
var flkty = new Flickity('.carousel', {
    hash: true,
});

// 11
var buttonReset = document.querySelector('.button-reset');
var firstSlide = document.querySelector('#carousel-cell1');

buttonReset.addEventListener('click', function(event) {

    //var index = buttonReset.indexOf(event.target);
    flkty.select(firstSlide);
});

//12
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});