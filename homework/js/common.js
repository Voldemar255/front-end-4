"use strict";

$(document).ready(function () {
    $('.main-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
    });
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.user-slider'
    // });
    // $('.user-slide').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    //
    // });

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
