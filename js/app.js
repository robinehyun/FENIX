$( document ).ready(function() {
  //highlight navbar as we school through each section
  $('body').scrollspy({ target: '#nav' });

  //* smooth scrolling for scroll to top */
  $('.scroll-top').click(function(){
    $('body,html').animate({scrollTop:0},1000);
  });

  //* smooth scrolling for nav sections */
  $('#nav .navbar-nav li>a').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top+20;
    $('body,html').animate({scrollTop:posi},700);
  });

  //* set interval of 6 seconds per slide */
    $('.carousel').carousel({
      interval: 6000
    })
  });
