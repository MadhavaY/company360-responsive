// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000);
// } 



function div(){
  var div = $('.container'),
      now = div.filter(':visible'),
      next = now.next().length ? now.next() : div.first(),
      speed = 1000;

  
  now.fadeOut(speed);
  now.fadeIn(speed);
}


$(function(){
  setInterval(div,1400);
})