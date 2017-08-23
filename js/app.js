// Mobile Nav Slide
//
function openNav() {
   document.getElementById('nav').style.width = "100%";
}

function closeNav() {
   document.getElementById('nav').style.width = "0%";
}

// $(function(){
//   $('.menu-toggle, nav').click(function(){
//     $('.menu-toggle').toggleClass('navbar-on');
//     $('menu').fadeToggle();
//     $('menu').removeClass('menu');
//
//   });
// });


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

//Carousel Slider

$(function() {
   $(".skate-carousel").responsiveSlides();
});

document.querySelector( ".menu-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

//===================================//

//CONTACT MODAL//

//Event listener to open contact modal
$('.contact-open').on('click', function () {
  $('#contact-modal').css('display', 'block');
  // $('#contact-modal').fadeIn(350);
});

//Event listener to close contact modal
$('.close').on('click', function() {
  $('#contact-modal').css('display', 'none');
});
//
// $('.modal').on('click', function() {
//   $('#contact-modal').css('display', 'none');
// });

//============= VIDEO MODALS ==============//

//Event listener to open video modals
$('.video-open').on('click', function () {
  // $('#video-modal').css('display', 'block');
  $('#video-modal').fadeIn();
});
$('.video-open-2').on('click', function () {
  // $('#video-modal2').css('display', 'block');
  $('#video-modal2').fadeIn();
});
$('.video-open-3').on('click', function () {
  // $('#video-modal3').css('display', 'block');
  $('#video-modal3').fadeIn();
});
$('.video-open-4').on('click', function () {
  // $('#video-modal4').css('display', 'block');
  $('#video-modal4').fadeIn();

});
$('.video-open-5').on('click', function () {
  // $('#video-modal5').css('display', 'block');
  $('#video-modal5').fadeIn();

});
$('.video-open-6').on('click', function () {
  // $('#video-modal6').css('display', 'block');
  $('#video-modal6').fadeIn();

});
$('.video-open-7').on('click', function () {
  // $('#video-modal7').css('display', 'block');
  $('#video-modal7').fadeIn();

});
$('.video-open-8').on('click', function () {
  // $('#video-modal8').css('display', 'block');
  $('#video-modal8').fadeIn();

});
$('.video-open-9').on('click', function () {
  // $('#video-modal9').css('display', 'block');
  $('#video-modal9').fadeIn();

});
$('.video-open-10').on('click', function () {
  // $('#video-modal10').css('display', 'block');
  $('#video-modal10').fadeIn();

});
$('.video-open-11').on('click', function () {
  // $('#video-modal11').css('display', 'block');
  $('#video-modal11').fadeIn();

});
$('.video-open-12').on('click', function () {
  // $('#video-modal12').css('display', 'block');
  $('#video-modal12').fadeIn();

});
$('.video-open-13').on('click', function () {
  // $('#video-modal13').css('display', 'block');
  $('#video-modal13').fadeIn();

});
$('.video-open-14').on('click', function () {
  // $('#video-modal14').css('display', 'block');
  $('#video-modal14').fadeIn();

});

// Close Modals
$('.video-close').on('click', function() {
  // $('#video-modal').css('display', 'none');
  $('#video-modal').fadeOut();
  // $('#video-modal2').css('display', 'none');
  $('#video-modal2').fadeOut();
  // $('#video-modal3').css('display', 'none');
  $('#video-modal3').fadeOut();
  // $('#video-modal4').css('display', 'none');
  $('#video-modal4').fadeOut();
  // $('#video-modal5').css('display', 'none');
  $('#video-modal5').fadeOut();
  // $('#video-modal6').css('display', 'none');
  $('#video-modal6').fadeOut();
  // $('#video-modal7').css('display', 'none');
  $('#video-modal7').fadeOut();
  // $('#video-modal8').css('display', 'none');
  $('#video-modal8').fadeOut();
  // $('#video-modal9').css('display', 'none');
  $('#video-modal9').fadeOut();
  // $('#video-modal10').css('display', 'none');
  $('#video-modal10').fadeOut();
  // $('#video-modal11').css('display', 'none');
  $('#video-modal11').fadeOut();
  // $('#video-modal12').css('display', 'none');
  $('#video-modal12').fadeOut();
  // $('#video-modal13').css('display', 'none');
  $('#video-modal13').fadeOut();
  // $('#video-modal14').css('display', 'none');
  $('#video-modal14').fadeOut();
});


$('.video-close').click(function(){
  $('.player').each(function(){
  this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});
});


// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// var player2;
// function onYouTubeIframeAPIReady() {
//   player2 = new YT.Player('player2', {
//      videoID: 'IFHcflZbBq0'
//  });
//
// }
//
//
// $(".video-close").click(function() {
//   player2.pauseVideo();
// });



//Contact form

function _(id){ return document.getElementById(id); }

function submitForm() {
   _("submit").disabled = true;
   _("status").innerHTML = "please wait...";
   var formdata = new FormData();
   formdata.append("name", _("name").value);
   formdata.append("email", _("email").value);
   formdata.append("message", _("message").value);
   var ajax = new XMLHttpRequest();
   ajax.open("POST", "form.php");
   ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status == 200) {
         if(ajax.responseText == "success") {
            _("form").innerHTML = '<h2>Thanks ' + _("name").value+', your message has bent sent.</h2>';
         } else {
            _("status").innerHTML = ajax.responseText;
            _("submit").disabled = false;
         }
      }
   };
   ajax.send(formdata);
}


//Scroll to top
var link,
toggleScrollToTop = function() {
   if($("body").scrollTop() > 0 || $("html").scrollTop() > 0){
      link.fadeIn(400);
   } else {
      link.fadeOut(400);
   }
};
$(document).ready(function() {
   link = $("#scroll-to-top");

   $(window).scroll(toggleScrollToTop);

   toggleScrollToTop();

   link.on("click", function() {
      $("body").animate({scrollTop: 0});
      $("html").animate({scrollTop: 0});
   });
});
