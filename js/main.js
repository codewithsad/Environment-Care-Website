$(document).ready(function($){
  
 /*-- Menu Sticky --*/
 var windows = $(window);
 var sticky = $('.header-sticky')
 windows.on('scroll', function() {
     var scroll = windows.scrollTop();
     if (scroll < 250) {
         sticky.removeClass('stick');
     } else {
         sticky.addClass('stick');
     }
 });

 // menu-toggle-btn
$(".menu-toggle-btn").click(function(){
    $(".main-menu").toggleClass("open-menu")
 });
//open search box 
$(".open-search-box").click(function(){
    $(".search-box").toggleClass("search-box-show");
});
  /*counter up*/
  $('.counter').counterUp({
     delay: 10,
     time: 1000
 });
});
    