$( document ).ready(function() {

 $("body").animate({opacity: 1}, timing/2);

 var tabletWidth = 1000;
 var mobileWidth = 600;
 var freshpage = function() {

  if($(window).width() > tabletWidth ){
    //parallax movement onscroll
    var maxDistance = 60;
    $(".lax").each(function(){
      var value = Math.floor(Math.random() * (maxDistance*2) - maxDistance);
      $(this).attr("data-parallax","{\"y\" : "+value+"}");
    });
  } else {
    $(".lax").each(function(){
      //NO MORE PARALLAX MOVEMENT
      $(this).removeAttr("data-parallax");
      $(this).removeAttr("style");
    });
  }

};

freshpage();
$.event.special.debouncedresize.threshold = 500;//wait until 500ms between resizes to trigger
$(window).bind("debouncedresize", function() {
  freshpage();
});


//PAGE EXITS
$(document).keydown(function(e) {
     if (e.keyCode == 27) { // escape key 
        href = getRootUrl(); //get home page
        exitPage(href);
      }
    if (e.keyCode == 37) { // left arrow key
      href = $("a.prev").attr('href');//get href from previous buttom
      exitPage(href);
    }
    if (e.keyCode == 39) { // right arrow key
      href = $("a.next").attr('href');//get href from previous buttom
      exitPage(href);
    }
  });

function getRootUrl() {
  return window.location.origin?window.location.origin+'/':window.location.protocol+'/'+window.location.host+'/';
}

var timing = 800;
function exitPage ( href ) {
  $("body").animate({opacity: 0}, timing/2);
  setTimeout(function() {window.location = href}, timing/2);
}

$("a").click(function ( event ){
 event.preventDefault();
 href = $(this).attr('href');
 exitPage(href);
});

});