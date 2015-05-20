$(function() {

  // play audio right away
var v = document.getElementsByTagName("audio")[0];
v.play(); 

$("#demo").bind('ended', function(){
   $("h1").addClass("animated fadeOut");
   $(".thanks").addClass("animated FadeInRight").removeClass("hide");
   clearInterval(start);
});

// array of css animate classes
  var animate = ["bounce", "rubberBand", "pulse", "flash", "shake","jello"];

 function getRandomNumber(n){
         var n = Math.floor(Math.random()*n);
         return n;
      }

//randomly choose an animation in array
      function getRandomAnimation(){
       var num = getRandomNumber(animate.length);
       return animate[num];
      };

// Set interval of time between changing animate classes
 var start = setInterval(animated, 3000);


// animate each letter with random class
function animated(){
            $(".h").removeClass().addClass("h infinite animated").addClass(getRandomAnimation());

            $(".j").removeClass().addClass("j infinite animated").addClass(getRandomAnimation());

            $(".c").removeClass().addClass("c infinite animated").addClass(getRandomAnimation());
        }


// pause animation when music pauses
$(".pause").on("click", function(){
  console.log("removed"); 
  $("h1").addClass("animated rubberBand");
  $(".h, .j, .c").removeClass("animated");
  clearInterval(start);
});


// restart music after pause
$(".play").on("click", function(){
    $("h1").removeClass("rubberBand");
    $(".h, .j, .c").addClass("animated");
    start = setInterval(animated, 3000);
});

});