$(document).ready(function(){
  var al = $("#home").offset().top;

   $(window).scroll(function(){
      var barra = $(window).scrollTop();
      var position = barra * 0.05;

      if(barra > (al/2)){
         $("#nav").addClass("navColor");
      }else{
        $("#nav").removeClass("navColor");
      }

      $("#home").css({'background-position' : '0 -' + position + "px"});
   });
});
