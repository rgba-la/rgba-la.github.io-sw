// Mobile Nav Slide
function openNav() {
   document.getElementById('nav').style.width = "100%";
}

function closeNav() {
   document.getElementById('nav').style.width = "0%";
}

//==================================//

// Subnav Scroll
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
   // On-page links
   if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
   ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
            scrollTop: target.offset().top
         }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
               return false;
            } else {
               $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
               $target.focus(); // Set focus again
            }
         });
      }
   }
});


//===================================//


//CONTACT MODAL//

//Event listener to open contact modal
$('.contact-open').on('click', function () {
  $('#contact-modal').fadeIn();
});

//Event listener to close contact modal
$('.close').on('click', function() {
  $('#contact-modal').fadeOut();

});

//============= VIDEO MODALS ==============//

//Event listener to open video modals
$('.video-open').on('click', function () {
  $('#video-modal').fadeIn();
});
$('.video-open-2').on('click', function () {
  $('#video-modal2').fadeIn();
});
$('.video-open-3').on('click', function () {
  $('#video-modal3').fadeIn();
});
$('.video-open-4').on('click', function () {
  $('#video-modal4').fadeIn();
});
$('.video-open-5').on('click', function () {
  $('#video-modal5').fadeIn();
});
$('.video-open-6').on('click', function () {
  $('#video-modal6').fadeIn();
});
$('.video-open-7').on('click', function () {
  $('#video-modal7').fadeIn();
});
$('.video-open-8').on('click', function () {
  $('#video-modal8').fadeIn();
});
$('.video-open-9').on('click', function () {
  $('#video-modal9').fadeIn();
});
$('.video-open-10').on('click', function () {
  $('#video-modal10').fadeIn();
});
$('.video-open-11').on('click', function () {
  $('#video-modal11').fadeIn();
});
$('.video-open-12').on('click', function () {
  $('#video-modal12').fadeIn();
});
$('.video-open-13').on('click', function () {
  $('#video-modal13').fadeIn();
});
$('.video-open-14').on('click', function () {
  $('#video-modal14').fadeIn();
});
$('.video-open-15').on('click', function () {
  $('#video-modal15').fadeIn();
});
$('.video-open-16').on('click', function () {
  $('#video-modal16').fadeIn();
});
$('.video-open-17').on('click', function () {
  $('#video-modal17').fadeIn();
});

// Close  Video Modals
$('.video-close').on('click', function() {
  $('#video-modal').fadeOut();
  $('#video-modal2').fadeOut();
  $('#video-modal3').fadeOut();
  $('#video-modal4').fadeOut();
  $('#video-modal5').fadeOut();
  $('#video-modal6').fadeOut();
  $('#video-modal7').fadeOut();
  $('#video-modal8').fadeOut();
  $('#video-modal9').fadeOut();
  $('#video-modal10').fadeOut();
  $('#video-modal11').fadeOut();
  $('#video-modal12').fadeOut();
  $('#video-modal13').fadeOut();
  $('#video-modal14').fadeOut();
  $('#video-modal15').fadeOut();
  $('#video-modal16').fadeOut();
  $('#video-modal17').fadeOut();
});

//Pause Youtube videos when closing modals
$('.video-close').click(function(){
  $('.player').each(function(){
     this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
   });
});

//===================================//

//Contact form
(function(){

    var $form = $('.contact-form');
    var $submit = $('#submit');
    var $status = $('#status');

    function formdata(elem){

        return Array.from(new FormData(elem).entries()).reduce(function(res, val){
            return (res[val[0]] = val[1]) && res;
        }, {});

    }

    $form.on('submit', function (event) {

        event.preventDefault();

        var data = formdata(event.target);

        $submit.attr('disabled', true);
        $status.html('please wait...');

        $.post('/api/email', data, function (res, status, xhr) {

            // handle error
            if (res.err) {
                $status.html(res.err);
                $submit.attr('disabled', false);

            // handle success
            } else {
                $form.html('<h2>Thanks ' + data.name + ', your message has been sent.</h2>');
            }

        });

    });

}());
