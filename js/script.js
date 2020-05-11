$(document).ready(function () {
    $("a[href*='#cat']").on("click", function (e) {
        var anchor = $(this);
        $('html, body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);

        e.preventDefault();
        return false;
    });

    $('#icon5').click(function ()
    {
    $("html,body").animate({scrollTop:0},1000);
    });

//Isotope active js code:
//************************

// Active isotope with jQuery code:

    $('.main-iso').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
// Isotope click function
    $('.iso-nav a').click(function(){
        $('.iso-nav a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.block-tab').isotope({
            filter: selector
        });
        return false;
    });




});
/*Google Map api*/
function initMap() {
    var uluru = {lat: 40.189021, lng:  44.523336};
    var div=document.getElementById('map');
    var options={
        zoom: 16,
        center: uluru,
        styles:[
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]
    };
    var popupContent = '<p>IT-TALENTS Association, 8 Koryun St</p>';
    var MyMap = new google.maps.Map(div,options );


    addMarke({lat: 40.189021, lng:  44.523336});
    function addMarke(cordinat) {

        var marker = new google.maps.Marker({
            position: cordinat,
            map: MyMap



        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker.addListener('click', function() {
            infowindow.open(MyMap, marker);
            marker.setAnimation(null);
            google.maps.event.addListener(infowindow,'closeclick',function(){
                marker.setAnimation(google.maps.Animation.BOUNCE);
            });
        });
    }
    infowindow = new google.maps.InfoWindow({
        content: popupContent
    });

}
/*/Google map Api*/

var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext('2d'),

    //parameters
    total = w,
    accelleration = .05,

    //afterinitial calculations
    size = w/total,
    occupation = w/total,
    repaintColor = 'rgba(0, 0, 0, .04)';
colors = [],
    dots = [],
    dotsVel = [];

//setting the colors' hue
//and y level for all dots
var portion = 360/total;
for(var i = 0; i < total; ++i){
    colors[i] = portion + i;

    dots[i] = h;
    dotsVel[i] = 10;
}

function anim(){
    window.requestAnimationFrame(anim);

    ctx.fillStyle = repaintColor;
    ctx.fillRect(0, 0, w, h);

    for(var i = 0; i < total; ++i){
        var currentY = dots[i] - 1;
        dots[i] += dotsVel[i] += accelleration;

        ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
        ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

        if(dots[i] > h && Math.random() < .01){
            dots[i] = dotsVel[i] = 0;
        }
    }
}

anim();