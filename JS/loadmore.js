/*
$(function($){
  // Here we can use '$' as jQuery alias without it conflicting with other
  // libraries that use the same namespace
  //$('a').append('<div>Hello</div>')
  //var i;
  //var count = 1;
  // loop over the array
  //for(i = 0; i<count; ++i)
  //  {
  //    $('#cell > a').append('<img class="new-img" src="new2.GIF" width="27" height="17">')
  //  }
  var lis = $('#cell > a');
  lis.slice(0,5).append('<img class="new-img" src="new2.GIF" width="27" height="17">')//.addClass('on');
  //lis.slice(5).addClass('off');
});
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
*/

$( $(document) ).ready(function () {
    
  var lis = $('#cell > a');
  lis.slice(0,5).append('<img class="new-img" src="new2.GIF" width="27" height="17">');
  $(".rows").slice(20,5000).hide();
      //$("#new-img").slice(0,10).show();
      //$(".row").slice(0, 19).show(); // select the first ten
  $("#loadmore").click(function(e){ // click event for load more
      e.preventDefault();
      $(".rows:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
      if($(".rows:hidden").length == 0){
          $("#loadmore").css('visibility','hidden');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 600);
  
  });
});

$('#btn-scroll-top').click(function () {
      $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#btn-scroll-top').fadeIn();
        } else {
            $('#btn-scroll-top').fadeOut();
            
        }
    });

    
    $(document).onkeypress = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
    return false;  
    }  
    }  
    $(document).onmousedown = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
    return false;  
    }  
    }  
    $(document).onkeydown = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
    return false;  
    }  
    }  
  
       // disable right click
       $(document).addEventListener('contextmenu', event => event.preventDefault());
   
       $(document).onkeydown = function (e) {
   
           // disable F12 key
           if(e.keyCode == 123) {
               return false;
           }
   
           // disable I key
           if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
               return false;
           }
   
           // disable J key
           if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
               return false;
           }
   
           // disable U key
           if(e.ctrlKey && e.keyCode == 85) {
               return false;
           }
       }

      
/*
$( $(document) ).ready(function () {
    $(".content").slice(0, 3).show();
      if ($(".content:hidden").length != 0) {
        $(".load-More").show();
      }   
      $(".load-More").on('click', function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 6).slideDown();
        if ($(".content:hidden").length == 0) {
          $(".load-More").fadeOut('slow');
        }
      });
    });
    */