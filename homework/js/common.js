"use strict";

$(document).ready(function(){
    $('.main-slider').slick({
    autoplay: true,
        autoplaySpeed: 4000,
});
});



$(document).ready(function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.user-slide'
    });
    $('.user-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});