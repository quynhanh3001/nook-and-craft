jQuery(document).ready(function($) {
  var scroll = $(window).scrollTop();
  var scrollup = $('.scroll-top');
  /*------------------------------------------------
            Scroll Top
  ------------------------------------------------*/
  scrollup.click(function () {
    $('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      scrollup.fadeIn();
    } else {
      scrollup.fadeOut();
    }
  });
});

// Product Slider
jQuery(document).ready(function ($) {
  const midSection = $('.product-section');
  const midOwl = midSection.find('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
      0: { 
        items: 1 
      },
      768: { 
        items: 2.7 
      },
      992: { 
        items: 2.7 
      },
      1200: { 
        items: 3.7 
      },
    },
    autoplay: true,
  });

  const midDots = midSection.find('.custom-dots').empty();

  const totalSlides = midSection.find('.owl-item:not(.cloned)').length;

  for (let candles_shop_i = 0; candles_shop_i < totalSlides; candles_shop_i++) {
    midDots.append(`<button class="dot" data-index="${candles_shop_i}"></button>`);
  }

  midDots.on('click', '.dot', function () {
    midOwl.trigger('to.owl.carousel', [$(this).data('index'), 300]);
  });

  midDots.find('.dot').eq(0).addClass('active');

  midOwl.on('changed.owl.carousel', function (e) {
    const realIndex = e.item.index - e.relatedTarget._clones.length / 2;
    const index = (realIndex + e.item.count) % e.item.count;

    midDots.find('.dot').removeClass('active');
    midDots.find('.dot').eq(index).addClass('active');
  });

});

// Main Slider
jQuery(document).ready(function ($) {
  const midSection = $('.banner-mid-box');
  const midOwl = midSection.find('.owl-carousel').owlCarousel({
    loop: true,
    margin: 1,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
  });

  const midDots = midSection.find('.custom-dots').empty();

  const totalSlides = midSection.find('.owl-item:not(.cloned)').length;

  for (let candles_shop_i = 0; candles_shop_i < totalSlides; candles_shop_i++) {
    midDots.append(`<button class="dot" data-index="${candles_shop_i}"></button>`);
  }

  midDots.on('click', '.dot', function () {
    midOwl.trigger('to.owl.carousel', [$(this).data('index'), 300]);
  });

  midDots.find('.dot').eq(0).addClass('active');

  midOwl.on('changed.owl.carousel', function (e) {
    const realIndex = e.item.index - e.relatedTarget._clones.length / 2;
    const index = (realIndex + e.item.count) % e.item.count;

    midDots.find('.dot').removeClass('active');
    midDots.find('.dot').eq(index).addClass('active');
  });

});

jQuery(document).ready(function() {
  jQuery('.testimonial-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<i class='fa-solid fa-angles-left'></i>", "<i class='fa-solid fa-angles-right'></i>"], 
    dots: true,
    rtl: false,
    responsive: {
    0: { 
      items: 1 
    },
    600: { 
      items: 2 
    },
    992: { 
      items: 3 
    },
    1200: { 
      items: 4 
    }
  },
    autoplay: true,
  });
});

jQuery(document).ready(function() {
  jQuery('.latest-news .owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    navText: ["<i class='fa-solid fa-angles-left'></i>", "<i class='fa-solid fa-angles-right'></i>"], 
    dots: false,
    rtl: false,
    responsive: {
    0: { 
      items: 1 
    },
    600: { 
      items: 2 
    },
    992: { 
      items: 3 
    },
    1200: { 
      items: 4 
    }
  },
    autoplay: true,
  });
});