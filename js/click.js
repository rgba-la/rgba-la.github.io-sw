$(document).ready(function() {
    $('.dataTrigger').click(function() {
        var dataClickValue = $(this).attr("data-id");
        $('#'+dataClickValue).toggleClass("active");
        $('body').toggleClass("noScroll");
    });

    $(".modal-container, .active").click(function(event) {

        var theseClasses = event.target.className;

        if (theseClasses == "modal-container active") {
            $(this).toggleClass("active");
            $('body').toggleClass("noScroll");
        }

    });
    $(".modal-container, .active, .pauseVideo").click(function(event) {

        var theseClasses = event.target.className;

        if (theseClasses == "modal-container pauseVideo active") {
            $(this).toggleClass("active");
            $('body').toggleClass("noScroll");
        }

    });
});





//  Instructions:
//  1. add class "dataTrigger" to the element you want to be clickable
//  2. add data-id="click1" to the same element. the "data-id" is the ID of the element you want to target
//  3. when you click "dataTrigger" it will add "active" class to the element with the ID
