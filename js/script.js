var elem = document.querySelector('.main-carousel');

// Loop for creating slides


var templateSlides = document.getElementById('template-slides').innerHTML;

Mustache.parse(templateSlides);

var slideCode = ''

for (var i = 0; i < slides.length; i++) {
    slideCode += Mustache.render(templateSlides, slides[i]);
};

elem.insertAdjacentHTML('beforeend', slideCode);


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


// Init Google Maps

initMap = function() {
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
};