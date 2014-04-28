$(document).ready(function(){

  // Sliding sidebar
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

  // Highlight active menu item
  $("#sidebar li.item").on('click', function(){
    // $('#sidebar li.item').removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
  })

  // Tabs
  $('.tabs li a').on('click', function(e)  {
    e.preventDefault();
    var currentAttrValue = $(this).attr('href');
    $('.tab-content ' + currentAttrValue).show().siblings().hide();  
    $(this).parent('li').addClass('active').siblings().removeClass('active');
  });

  // Show / hide details section
  $('#arrow-button-left').on('click', function(){
    $('.details').show();
    $(this).hide();
  })

  $('#arrow-button-right').on('click', function(){
    $('.details').hide();
    $('#arrow-button-left').show();
  })

})