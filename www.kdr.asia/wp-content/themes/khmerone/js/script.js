$(document).ready(function(){
   
   $('.carousel-nav ul li.next').click(function(){
       $('#mycarousel').carousel('next');
   });
    $('.carousel-nav ul li.prev').click(function(){
       $('#mycarousel').carousel('prev');
   });
    $('.carousel-nav-news ul li.next').click(function(){
       $('#newscarousel').carousel('next');
   });
    $('.carousel-nav-news ul li.prev').click(function(){
       $('#newscarousel').carousel('prev');
   });
  
   $('.btn-mobile').click(function(){
      $('.category .list-group').slideToggle(); 
   });
   if($(window).width() < 992) {
   $('.list-group-item a i').click(function(event){
      event.preventDefault();
      //alert('test');
      
   });
   $('.list-group-item').click(function(){
       $(this).toggleClass('arrow');
       $(this).children('ul').slideToggle();
       
   });
   }
   
      $('.scroll-top').click(function(){
        $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 1000);
   });
});