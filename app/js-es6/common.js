$(() => {


  if($('body').find('.video-cont').length){

    $("body").on("mouseover", ".main-prod_item", function(){
      var $video = $(this).find('video');

      if(!$video.length){
        return
      }

      if($video.attr('src')){
        $video[0].play();
        } else {
          var dataSrc = $video.attr('data-src');
          $video.attr('src', dataSrc);

          $video[0].addEventListener('loadedmetadata', () => {
            $video[0].play();
          })
        }
      
    });

    $("body").on("mouseleave", ".main-prod_item", function(){
      var $video = $(this).find('video');

      if(!$video.length){
        return
      }
      $video[0].pause();

      $video[0].currentTime = 0;
    })

  }

  if($('body .services-cont').find('video').length){
    var videoEl = document.getElementsByTagName('video')[0];

    setTimeout(function(){
      videoEl.play();
    }, 3000);
  }


  if($(window).width() > 667){
    
  	$(".main-slider").slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		slide: ".main-slide",
  		appendArrows: '.main-slider_nav',
  		responsive: [
         {
           breakpoint: 800,
           settings: {
             slidesToShow: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1
           }
         }
         ]
  	});
  }

  $('.burger').click(() => {
    $('body').toggleClass('js__menu-open');
  });

  $(".text-page table").wrap("<div class='table-wrap'></div>")


  $('.footer-top_item').each(function(i,el) {

    let $this = $(el);
    $this.find('ul').prepend('<div class="js__back">Назад</div>');
    let menuItem = $this.clone();

    $('.mobile-menu').append(menuItem);



  });

  $('.footer-title').click(function() {
    var $this = $(this);

    $this.closest('.footer-top_item').addClass('js__submenu-open');


  });

  $('.js__back').click(function(){
    var $this = $(this);

    $this.closest('.footer-top_item').removeClass('js__submenu-open');


  })

  let mainMenu = $('.head-nav').clone();
  $('.mobile-menu').append(mainMenu);

  let callback = $('.callback').clone();
  $('.mobile-menu').append(callback);
  

  let phone = $('.head-adress_block').clone();
  $('.mobile-menu').append(phone);

  // let soc = $('.footer-top_item .footer-top_soc').clone();
  // $('.mobile-menu').append(soc);


  $(".fancybox").fancybox({
    trapFocus: false,
    touch: false,
  });
});
