$(document).ready(function(){

  $('#sidebar-button').on('click', function(){
    $(this).toggleClass('hide');
    if ($(this).hasClass('hide')) {
      $('#sidebar').animate({left:'0px'},400);
      $('#content').animate({left:'300px'},400);  
    } else {
      $('#sidebar').animate({left:'-300px'},400);
      $('#content').animate({left:'0px'},400);  
    }  
  })

  // $('#sidebar-button').on('click', function(){
  //   $(".sidebar").toggleClass("sidebar-shift");  
  //   $(".content").toggleClass("content-shift");  
  // })

})