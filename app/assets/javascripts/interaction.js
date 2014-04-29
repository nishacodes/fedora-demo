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

  // Highlight active menu item
  $("#sidebar li.item").on('click', function(){
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
    $('.details').show().addClass('open');
    $(this).hide();
    $('.main-left').addClass('col-6').removeClass('col-12');
  })

  $('#arrow-button-right').on('click', function(){
    $('.details').hide().removeClass('open');
    $('#arrow-button-left').show();
    $('.main-left').addClass('col-12').removeClass('col-6');
  })

  $(window).resize(function(){
    if ($(window).width() < 850) {
      $('.main-left, .main-right').addClass('col-12').removeClass('col-6');
      $('ul.tabs, #arrow-button-left, #arrow-button-right').hide();
      $('.details, .tab-content h2, .tab-content div, .tab-content p').show();
    } else{
        if ($('.details').hasClass('open')) {
          $('.main-left, .main-right').addClass('col-6').removeClass('col-12');
          $('ul.tabs, #arrow-button-right').show();
        } else {
          $('.main-left').addClass('col-12').removeClass('col-12');
          $('.details').hide();
          $('#arrow-button-left').show();
        }
    }
  });


})