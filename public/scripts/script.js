$(function () {

    let togglerOpen = false;

    $(".down-point").click(function() {
        $("body, html").animate(
          {
            scrollTop: $(".about-container").offset().top - 70
          },
          800
        );
      });

    $(".about-jq").click(function() {
        $("body, html").animate(
          {
            scrollTop: $(".about-container").offset().top - 70
          },
          800
        );
      });

    $(".contact-jq").click(function() {
        $("body, html").animate(
          {
            scrollTop: $(".contact-container").offset().top
          },
          800
        );
      });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        
        if(scroll > 500){
          $('.down-point').css('display', 'none')
          $('.to-top-btn').css('display', 'inline')
        } else if (scroll < 500) {
          $('.down-point').css('display', 'block')
          $('.to-top-btn').css('display', 'none')
        }
    });

    $(".to-top-btn").click(function (){
      	$("html, body").animate({scrollTop: 0}, 800);
   });


    $('.carousel').carousel({
        interval: 6000
     });

    $('.navbar-nav>li>.collapse-trigger').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.landing').fadeIn();
        togglerOpen = false;
    });

    $('.click-away').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.landing').fadeIn();
        togglerOpen = false;
    })

    $('.cv-item').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.landing').fadeIn();
        togglerOpen = false;
    })

    $('.navbar-toggler-icon').on('click', function(){
        if(!togglerOpen){
          togglerOpen = true;
          $('.landing').fadeOut();
        } else {
          togglerOpen = false;
          $('.landing').fadeIn();
        }
    })

});