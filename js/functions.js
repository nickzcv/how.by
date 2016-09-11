"use strict";

//variables for overlay
var interval = 0;
var timeOut = setInterval(function(){preLoader();}, 2200);

//overlay function
function preLoader(){
      
  if (interval == 1) {
    clearInterval(timeOut);
    $('.overlay').fadeOut(2200, function(){
      $(this).css('left', 'auto');
      $(this).css('width', '0');
    });
    $('body').addClass('loaded');
  }

};

// for tablets -- make navbar fixed allways
  $(window).load(function(){
    if ($(window).width() < 1023 && $(window).width() >= 768 ) {
      $('.navbar').removeClass('navbar-default');
      $('.navbar').addClass('navbar-fixed');
      if ($('.navbar').hasClass('navbar-fixed')) {
        $('.navbar').removeClass('navbar-fixed-top');
      }else { return false;}
    }
    else {
      return false;
    }

  });

$(document).ready(function(){

  //overlay interval
  interval = 1;

  // add background from html with data-bg='path to your image'
  $.each($('[data-bg]'), function(){
      if ($(this).attr('data-bg').length > 0){
        $(this).css('background-image', 'url('+ $(this).attr('data-bg') +')');
      }
  });

  //show dropdown menu on hover
  if ($(window).width() > 1023){
    $(function(){
      $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
        },
        function() {
          $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
          $(this).toggleClass('open');
        });
    });
  }

	// gallery lightbox
	$('.gallery-images').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
          enabled: true, // set to true to enable gallery
          navigateByImgClick: true,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });

    // events headers hide on click - on index.html
    $(".event1 .panel-heading").hide();
    $('.event1 .collapsed').on('click', function(){
       $(this).closest($( '.panel-heading' )).hide();
       $(".event2 .panel-heading, .event3 .panel-heading").show();
    });
    $('.event2 .collapsed').on('click', function(){
       $(this).closest($( '.panel-heading' )).hide();
       $(".event1 .panel-heading, .event3 .panel-heading").show();
    });
    $('.event3 .collapsed').on('click', function(){
       $(this).closest($( '.panel-heading' )).hide();
       $(".event2 .panel-heading, .event1 .panel-heading").show();
    });

    // events buttons on click open page with reservation section
    $('.event-description-content button').on('click',function () {
        window.open('item-details.html#reservation ', '_parent')
        return false;
    });

    //reservation datepicker
    $("#reservDay").datepicker({
        format: 'dd/mm/yyyy',
        weekStart: 1,    
    });

    // removing yellow bg from inputs
    $('input').on('blur', function(){
       $(this).closest($( '.form-group' )).removeClass('focused');
    }).on('focus', function(){
      $(this).closest($( '.form-group' )).removeClass('focused').addClass('focused');
    });
    $('textarea').on('blur', function(){
       $(this).closest($( '.form-group' )).removeClass('focused');
    }).on('focus', function(){
      $(this).closest($( '.form-group' )).removeClass('focused').addClass('focused');
    });

    // related places hover effect with gallery 
    $(".place").parent().mouseenter(
      function () {
        $(this).addClass("active-gallery");               
    });
    $(".place").parent().mouseleave(
      function () {
        $(this).removeClass("active-gallery");
      }
    );

    var owl = $('.place-image-gallery');
    owl.owlCarousel({
        items: 1,
        margin: -1,
    });
    $('.place-with-gallery .owl-dot').hover(function() {
        $(this).click();
    }, function() {});

    resize_dots();
    function resize_dots(){
      var dots=jQuery('.owl-dots');
      dots.each(function(){
        $(this).find('.owl-dot').css('width',80/$(this).find('.owl-dot').length+"%");
      });
    }

    // select dropdown function initializing
    (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
          new SelectFx(el);
        } );
    })();

    //checkboxes on page browse-place-with-map.html
    function changeState(el) {
        if (el.readOnly) el.checked=el.readOnly=false;
        else if (!el.checked) el.readOnly=el.indeterminate=true;
    }

    // menu button functions
    $('.navbar-toggle').on('click',function(){
      $('.navbar-fixed-top').addClass('navbar-fixed').removeClass('navbar-default');
    });


    // hover efect blog-page.html at post blocks
    $('.post-title').on('mouseenter', function(){
      $(this).parent().addClass('hovered');
    });
    $('.post-title').on('mouseleave', function(){
      $(this).parent().removeClass('hovered');
    });


	$(window).scroll(function() {    
    
		// fixed to top navbar
    if($('.navbar-fixed-top').length > 0){
	    var scroll = $(window).scrollTop();
	    if (scroll >= 100) {
	       	$(".navbar").addClass("navbar-fixed");
	       	$(".navbar-default .container").addClass("navbar-default container-fluid");
	       	$(".navbar-default .container").removeClass("navbar-default container");
	    }else{
	    	$(".navbar").removeClass("navbar-fixed");
	    	$(".navbar-default .container-fluid").addClass("navbar-default container");
	    	$(".navbar-default .container-fluid").removeClass("navbar-default container-fluid");
	    }
    }

	});

  // sidebar widgets bulleted line
  $.each($('.right-border'), function(){
      $(this).css('width', $(this).parent().width() - $(this).prev().width() - 40 );
    });
  });

  // section title bullets separators !!!    
  $.each($('.top-text-intro'), function(){
    var divWidth = ($(this).width() - $(this).find('.section-intro').width()) / 2; 
    $(this).find('.left-separator, .right-separator').css('width', divWidth);
  });


  // hover efect on blog posts blocks




