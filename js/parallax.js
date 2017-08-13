
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
                            || window.mozRequestAnimationFrame
                            || window.webkitRequestAnimationFrame
                            || window.msRequestAnimationFrame
                            || function(f){setTimeout(f, 1000/60)}
$(".parallax").each(function(idx){
    var i = idx + 1;
    var moveImage = $(this);
    var elementHeight = moveImage.height() / 2;
    var screenHeight = window.innerHeight / 2;

    function parallax(){
        var viewableOffset = moveImage.offset().top - screenHeight - $(window).scrollTop() + elementHeight;
        var parallaxSpeed = viewableOffset * .06;
        if( window.innerHeight >= viewableOffset && -window.innerHeight <= viewableOffset) {
            moveImage.css(
                "-webkit-transform", "translate3d(0," + parallaxSpeed.toFixed(0) + "px, 0)",
                "-moz-transform", "translate3d(0," + parallaxSpeed.toFixed(0) + "px, 0)",
                "transform", "translate3d(0," + parallaxSpeed.toFixed(0) + "px, 0)"
            );
        };
    };
    window.addEventListener('scroll', function(){ // on page scroll
        requestAnimationFrame(parallax) // call parallax() on next available screen repaint
    }, false);
});
