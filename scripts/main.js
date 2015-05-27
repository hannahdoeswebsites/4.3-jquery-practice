
(function(){
  'use strict';



  $(document).ready(function() {
    

      $("ol").slideUp(0);

      $("h3").click(function(e) {
          // slideUp the sibling ol
          $("h3").removeClass('active');
          $("ol").slideUp(300).removeClass('open');
          $(this).addClass('active');
          // Open up the hidden content panel
          $(this).siblings("div").find("ol").slideDown(300).addClass('open');


          e.preventDefault();
      });
  });


})();
