
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
