 (function($) {
     "use strict";
     let v = {},
         mainhead = $('header'),
         mainbody = $('body'),
         loadder = $('#warperloader'),
         header = $('#header-main'),
         navigation = $('.navigation'),
         mainslide = $(".owl-carousel"),
         testislide = $(".ver-two"),
         goup = $('.goup'),
         menuTrigger = $('.bar'),
         nav = $('.header-nav'),
         closeButton = nav.find('.header-nav__close'),
         siteBody = $('#site-warp'),
         links = $('.sc-to'),
         wdth = window.innerWidth,
         workcontent = $('.work-content');
     v.setHeader=function(){ 
         const scrlTop = $(window).scrollTop();
         if (wdth < 481) {
             if (scrlTop > 100) {
                 header.removeClass('transparant')
                 header.css({ 'height': "70px", "marginTop": "0px" });
                 navigation.css({ 'padding': '20px' })
                 
                 header.addClass('light');
                 goup.addClass('show');
             } else {
                 header.addClass('transparant')
                 header.css({ 'height': "70px", "marginTop": "0px", "background": "transparent" });
                 navigation.css({ 'padding': '30px' })
                 
                 header.removeClass('light');
                 goup.removeClass('show');
             }
         } else if (wdth < 768) {
             if (scrlTop > 100) {
                 header.removeClass('transparant')
                 header.css({ 'height': "70px", "marginTop": "0px" });
                 navigation.css({ 'padding': '20px' })
                 
                 header.addClass('light');
                 goup.addClass('show')
             } else {
                 header.addClass('transparant')
                 header.css({ 'height': "70px", "marginTop": "0px", "background": "transparent" });
                 navigation.css({ 'padding': '30px' })
                 
                 header.removeClass('light');
                 goup.removeClass('show')
             }
         } else if (wdth < 992) {
             if (scrlTop > 100) {
                 header.removeClass('transparant')
                 header.css({ 'height': "80px", "marginTop": "0px" });
                 navigation.css({ 'padding': '20px' })
                 
                 header.addClass('light');
                 goup.addClass('show')
             } else {
                 header.addClass('transparant')
                 header.css({ 'height': "135px", "marginTop": "0px", "background": "transparent" });
                 navigation.css({ 'padding': '30px' })
                 
                 header.removeClass('light');
                 goup.removeClass('show')
             }
         } else {
             if (scrlTop > 100) {
                 header.removeClass('transparant')
                 header.css({ 'height': "80px", "marginTop": "0px" });
                 navigation.css({ 'padding': '20px' })
                 
                 header.addClass('light');
                 goup.addClass('show')
             } else {
                 header.addClass('transparant')
                 header.css({ 'height': "135px" });
                 navigation.css({ 'padding': '30px' })
                 
                 header.removeClass('light');
                 goup.removeClass('show')
             }
         }
     }
    
  
     v.offCanvas= function(){ 
         mainbody.on('click', '.bar', function(e) {
             e.preventDefault();
             siteBody.addClass('menu-is-open');
         });
         closeButton.on('click', function(e) {
             e.preventDefault();
             menuTrigger.trigger('click');
         });
         siteBody.on('click', function(e) {
             if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                 siteBody.removeClass('menu-is-open');
             }
         });
     }

     v.herocarousel=function(){ 
         testislide.owlCarousel({
             pagination: false,
             autoHeight: true,
             center: true,
             loop: false,
             nav: false,
             dots: false,
             margin: 30,
             items: 0,
             rtl: false,
             navText: [],
             responsive: {
                 992: {
                     items: 2
                 },
                 768: {
                     items: 1
                 },
                 0: {
                     items: 1
                 }
             }
         });
         mainslide.owlCarousel({
             items: 1,
             loop: true,
             dots: true,
             video: false,
             merge: true,
             autoplayHoverPause: true,
             dotsContainer: '#customDots',
             animateIn: 'fadeIn',
             animateOut: 'fadeOut',
             autoplay: false,
             mouseDrag: false,
             touchDrag: false,
             autoplayTimeout: 20000,
             smartSpeed: 500,
             nav: true,
             navText: ["<i class='pe-7s-angle-left'></i>", "<i class='pe-7s-angle-right'></i>"]
         });
         var owl = $('.owl-carousel');
         $('.owl-dot').on('click', function() {
             owl.trigger('to.owl.carousel', [$(this).index(), 500]);
             Img($(this).index() + 1);
         });
         owl.on('changed.owl.carousel', function(event) {
             if (event.item.index == event.item.count) {
                 Img(2);
             } else {
                 if (event.item.index - 1 == 0) {
                     Img(3);
                 } else {
                     Img(event.item.index - 1);
                 }
             }
         });
         function Img(i) {
             if (i > 0) {
                 $('.carousel_img').each(function() {
                     $(this).removeClass('carousel_img_active');
                 });
                 $('.carousel_img_' + i).addClass('carousel_img_active');
             }
         }
     }

    v.indicator = function(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - 800,
        scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    }

    document.addEventListener('readystatechange', event => {
         setTimeout(function() {
             loadder.fadeOut();
         }, 2000);
         v.indicator();
         v.setHeader();
         v.offCanvas();
         v.herocarousel();
     });

     document.addEventListener('scroll', event => {
         v.setHeader();
         v.indicator();
     });
   
     document.addEventListener('resize', event => {
         v.setHeader();
     });
    
     mainbody.on("click", ".goup", function(e) {
         e.preventDefault();
         $(window).scrollTo($('html, body'), 500, { offset: 0 });
     })
    
     mainbody.on("click", ".smoothscroll", function(e) {
         e.preventDefault();
         const goto = $(this).attr('href');
         $(window).scrollTo(goto, 500, { offset: 0 });
     })

     mainbody.on("click", ".smoothscrollmob", function(e) {
        e.preventDefault();
        const goto = $(this).attr('href');
        $(window).scrollTo(goto, 500, { offset: -70 });
    })

     $(window).on("load",function(){
        setTimeout(function(){$('.loader-sec').hide();},1000); 
    });
   
    })(jQuery);
     
    
    