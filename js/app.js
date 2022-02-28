//Taken from https://www.w3schools.com/howto/howto_js_slideshow.asp//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000)
}
//End//
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning and welcome to my portfolio!';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon and welcome to my portfolio!';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening and welcome to my portfolio!';

document.getElementById('lblGreetings').innerHTML =
    '<b>' + greet + '</b>';


    // portfolio
     $('.gallery ul li a').click(function() {
         var itemID = $(this).attr('href');
         $('.gallery ul').addClass('item_open');
         $(itemID).addClass('item_open');
         return false;
     });
     $('.close').click(function() {
         $('.port, .gallery ul').removeClass('item_open');
         return false;
     });

     $(".gallery ul li a").click(function() {
         $('html, body').animate({
             scrollTop: parseInt($("#top").offset().top)
         }, 400);
     });
