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
    var losAngelesLoc = { lat: 34.054302, lng: -118.246977 };
    // var dubajLoc = { lat: 25.219288, lng: 55.277142 };
    // var kubaLoc = { lat: 21.612649, lng: -78.972890 };
    // var malediwyLoc = { lat: -0.609701, lng: 73.111158 };
    // var rzymLoc = { lat: 41.903343, lng: 12.494790 };

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 6, center: losAngelesLoc });
    // The marker, positioned at Uluru
    //var markerOne = new google.maps.Marker({ position: losAngelesLoc, map: map });
    // var markerTwo = new google.maps.Marker({ position: dubajLoc, map: map });
    // var markerThree = new google.maps.Marker({ position: kubaLoc, map: map });
    // var markerFour = new google.maps.Marker({ position: malediwyLoc, map: map });
    // var markerFive = new google.maps.Marker({ position: rzymLoc, map: map });

    for (var i = 0; i < slides.length; i++) {
        var element = slides[i];

        var marker = new google.maps.Marker({ position: element.cords, map: map });
    }
};