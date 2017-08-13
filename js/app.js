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

//Event listener to open/close contact modal
$('.contact-open').on('click', function () {
  $('#contact-modal').css('display', 'block');
});

$('.close').on('click', function() {
  $('#contact-modal').css('display', 'none');
});
// 
// $('.modal').on('click', function() {
//   $('#contact-modal').css('display', 'none');
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
