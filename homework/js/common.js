"use strict";
$( "#toggle-button" ).on( "mousemove", function(event) {
    event.preventDefault(),
    $('.some-form').toggle();
});

$( "#toggle-button" ).on( "mouseleave", function() {
    $('.some-form').hidden;
});

$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.main-thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        autoplaySpeed: 4000,
        centerMode: true,
        focusOnSelect: true,
    });



});
function initMap() {
    var khmelnitsky = {lat: 49.422983, lng: 26.987133};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: khmelnitsky
    });
    var marker = new google.maps.Marker({
        position: khmelnitsky,
        map: map
    });
}

$('name-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 1,
        }
    }
});


$('email-form').validate({
    rules: {
        email: {
            required: true,
            email: true
}
    }
});


$('message-form').validate({
    rules: {
        message: {

        }
    }
});

$('your-email').validate({
    rules: {
        name: {
            required: true
}
}
});

