$(window).bind("pageshow", function(event) {//Safari fix for buggy reloads
  if (event.originalEvent.persisted) {
    window.location.reload(); 
  }
});

$(function() {
    $( ".project" ).draggable();
  });

$(window).load(function() {
  
// random postion function
var intoPosition = function(){
  
   //MACROS
   var attemptsAllowed = 300;
   var overlapAllowed = 5;
   var projectSpeed = 1000;
   
   var containerW = $("#projectWrapper").outerWidth(true);
   var containerH = $("#projectWrapper").outerHeight(true);

   var positions = [];
   
   $('.project').each(function() {
    var imgBox = $(this);
    imgBox.css("visibility", "visible");
    var coords = {
      w: imgBox.outerWidth(),
      h: imgBox.outerHeight()
    };
    var success = false,
    attempt = 0,
    overlap  = overlapAllowed;

    while (!success && (attempt < attemptsAllowed ))
    {
      coords.x = parseInt(Math.random() * (containerW-coords.w));
      coords.y = parseInt(Math.random() * (containerH-coords.h));
      
      success = true;
      
      $.each(positions, function(){
        if (
          coords.x <= (this.x + this.w - overlap) &&
          (coords.x + coords.w) >= (this.x + overlap) &&
          coords.y <= (this.y + this.h - overlap) &&
          (coords.y + coords.h) >= (this.y + overlap) 
          )
        {
          attempt = attempt+1;
          success = false;
          if(attempt > attemptsAllowed-15)
          {
            overlapAllowed = overlapAllowed+1;
          }
          if(attempt == attemptsAllowed)
          {
          		ga('send', 'event', 'BUSTED', 'error', 'home');
            imgBox.css("visibility", "hidden");
          }
        }
      });
    }
    
    positions.push(coords);
    
    imgBox.animate({
      margin: 0,
      top: coords.y + 'px',
      left: coords.x + 'px'
    }, projectSpeed, 'easeOutExpo');
    
    });};

  //ADDS DATA-DEPTH AND CLASS "LAYER" FOR PARALLAX
  //ASSIGNS Z-INDEX BASED ON SIZE
  var setParallax = function(){
    $('.project').each(function() {
      $(this).attr("data-depth", ($(this).outerWidth()*$(this).outerHeight())/80000)-($(window).width()*.01);
      $(this).css("z-index", Math.round(($(this).outerWidth()*$(this).outerHeight())/1000));
      $(this).css("pointer-events", "all");
      $(this).addClass("layer");
    });
    $('h2.project').each(function() {
      $(this).attr("data-depth", ($(this).outerWidth()*$(this).outerHeight())/6000);
      $(this).css("z-index", "900");
      $(this).css("pointer-events", "all");
    });
    
   //PARALLAX ////////////
   var projectWrapper = document.getElementById('projectWrapper');
    var parallax = new Parallax(projectWrapper, {
      calibrateX: false,
    calibrateY: false,
    invertX: true,
    invertY: true,
    limitX: 70,
    limitY: 70,
    pointerEvents: true
    });
 };
 
  //SMART RESIZE
  //from http://cdn.rawgit.com/louisremi/jquery-smartresize/master/jquery.debouncedresize.js
  $.event.special.debouncedresize.threshold = 500;//wait until 500ms between resizes to trigger
  $(window).bind("debouncedresize", function() {
    $("#tool").append("rszd,");
    intoPosition();
    setParallax();
    
  });
  
  $("#projectWrapper").animate({opacity:1}, 1000);
  setParallax();
  intoPosition();
  $("img.project").attr("style","position: absolute !important;");
  
  
  //CLICKS
  $("a[href$='#shuffle']").click(intoPosition);
  $("a[href$='#weather']").one('click', function(){ weather(); });
  $("a[href$='#email']").one('click', function(){ $("#email").append("armentajames@gmail.com"); });
  $("a[href$='#about']").one('click', function(){ $("#about").append("James is a <wbr>full-stack developer <wbr>from California"); });


  var timing = 1000;

  $("img.project.layer").click(function(){
    $(".project").not(this).fadeOut(timing*.6);
    $(this).delay(timing*.4).fadeOut(timing*.6);
  });
  $("a").click(function ( event ){
   event.preventDefault();
   href = $(this).attr('href');
   setTimeout(function() {window.location = href;}, timing);
 });
});//END FUNCTION FOR 'AFTER IMAGES LOAD'


//WEATHER
var weather = function() {
  
  $("#weather").html("Go outside.");


};
