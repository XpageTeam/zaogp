'use strict';

$(function () {

  if ($('body').find('.video-cont').length) {

    $("body").on("mouseover", ".main-prod_item", function () {
      var $video = $(this).find('video');

      if (!$video.length) {
        return;
      }

      if ($video.attr('src')) {
        $video[0].play();
      } else {
        var dataSrc = $video.attr('data-src');
        $video.attr('src', dataSrc);

        $video[0].addEventListener('loadedmetadata', function () {
          $video[0].play();
        });
      }
    });

    $("body").on("mouseleave", ".main-prod_item", function () {
      var $video = $(this).find('video');

      if (!$video.length) {
        return;
      }
      $video[0].pause();

      $video[0].currentTime = 0;
    });
  }

  if ($('body .services-cont').find('video').length) {
    var videoEl = document.getElementsByTagName('video')[0];

    setTimeout(function () {
      videoEl.play();
    }, 3000);
  }

  if ($(window).width() > 667) {

    $(".main-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      slide: ".main-slide",
      appendArrows: '.main-slider_nav',
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  $('.burger').click(function () {
    $('body').toggleClass('js__menu-open');
  });

  $(".text-page table").wrap("<div class='table-wrap'></div>");

  $('.footer-top_item').each(function (i, el) {

    var $this = $(el);
    $this.find('ul').prepend('<div class="js__back">Назад</div>');
    var menuItem = $this.clone();

    $('.mobile-menu').append(menuItem);
  });

  $('.footer-title').click(function () {
    var $this = $(this);

    $this.closest('.footer-top_item').addClass('js__submenu-open');
  });

  $('.js__back').click(function () {
    var $this = $(this);

    $this.closest('.footer-top_item').removeClass('js__submenu-open');
  });

  var mainMenu = $('.head-nav').clone();
  $('.mobile-menu').append(mainMenu);

  var callback = $('.callback').clone();
  $('.mobile-menu').append(callback);

  var phone = $('.head-adress_block').clone();
  $('.mobile-menu').append(phone);

  var cities = $('.city-select').clone();
  $('.mobile-menu').append(cities);

  $(".fancybox").fancybox({
    trapFocus: false,
    touch: false
  });
});
//# sourceMappingURL=common.js.map
