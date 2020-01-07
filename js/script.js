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
    //var losAngelesLoc = { lat: 34.054302, lng: -118.246977 };


    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 6, center: slides[0].cords });

    slides.forEach(function(element, i) {
        var element = slides[i];

        var marker = new google.maps.Marker({ position: element.cords, map: map });

        marker.addListener('click', function(event) {
            flkty.select(i);
        });


    });
    flkty.on('change', function(i) {
            var map = { zoom: 6, center: slides[0].cords });
    })
};