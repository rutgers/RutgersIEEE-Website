//smooth-scroll.js
//Author: Jeremy Savarin
//Smooth scroll to anchors on page

$("#navbar ul li a[href^='#']").on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top}, 500, function() {
            window.location.hash = hash;
    });
});
