var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function(){
  AOS.init({once: true,});

  $('.video').on('ended',function(){
      $(this).addClass('blurEffect');
    $('.content').show();
  });
  growServices()
  growApproach()
  hamburger()
  badgeBlackShow()
  initMasonry()
  theTyping()
  backgroundAnimation()
  postModal()
  countJs()
  navclickEffect()
})

function navclickEffect() {
  $(document).on('click', 'nav a', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 88
    }, 500);
  });
}

function countJs(){
  $(function() {
    $(".counter").countimator();
  });
}

function postModal(){
  $(".business,.modal-trigger").click(function() {
    const content = $(this).data('modal-content')
    const header = $(this).data('modal-header')
    $('#postModal').on('show.bs.modal', function(){  
        $('#postModal').find('.modal-body').html(content);
        $('#postModal').find('.modal-title').html(header);
    })
    $('#postModal').modal('show')
  })
}

function backgroundAnimation() {
  let theIndex = 0
  let total = $(".slide-show").length
  setInterval(function(){
    let i = theIndex+1 === total ? 0 : theIndex+1
    $('.slide-show').eq(theIndex).fadeOut('slow', function(){
      $(".slide-show").eq(i).fadeIn('slow', function(){
        theIndex = theIndex === total-1 ? 0 : theIndex+1
      })
    })
  }, 5000)
}

function theTyping(){
  var options = {
    strings: typeCollection,
    typeSpeed: 60,
    backDelay: 3000,
    backSpeed: 40,
    loop: true,
  };
  
  var typed = new Typed('.typing', options);
}

function initMasonry() {
  let $container = $('.feed-masonry').isotope({
    itemSelector: '.grid-item',
    masonry: {
      gutter: '.gutter-sizer'
    },
  })

  $(window).scroll(function() {
    $container.isotope('layout');
  });


  $("#load-masonry").on('click', function(){
      const el = getItem()
      $container.isotope( 'insert', $(el) );
      const remainingLength = itemsGrid.length
      if (remainingLength === 0)
        $("#load-masonry").fadeOut()
  })

  $(".category-btn").on('click', function(){
    $(".category-btn").removeClass('active')
    $(this).addClass('active')
    const val = $(this).attr('data-choosen')
    $container.isotope({ filter: `${val}` })
  })

  function getItem() {
    let el = ''
    const max = 10
    let i = 0;
    for(let i = 0; i < max ; i++) {
      try {
        el = el + `<div class="grid-item ${itemsGrid[i].theClass}"><img src="${itemsGrid[i].img}"/></div>`
      } catch(er){
        itemsGrid.splice(0, i)
        break;
      }
      if (i === max - 1) {
        itemsGrid.splice(0, max)
      }
    }
    return el
  }
}

function badgeBlackShow() {
  $(".badge-black").fadeIn()

}

function hamburger() {
  $("#toggle").click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).removeClass('force')
      $(".navbar-mobile").fadeOut()
      $(".navbar-mobile a").fadeOut()
      $(".navbar-mobile button").fadeOut()
    }
    else {
      $(this).addClass('active')
      $(this).addClass('force')
      $(".navbar-mobile")
      .fadeIn()
      .css("display", "flex")
      $(".navbar-mobile a").each(function (i) {
        // store the item around for use in the 'timeout' function
        var $item = $(this); 
        // execute this function sometime later:
        setTimeout(function() { 
          $item.fadeIn()
        }, 150*i);
        // each element should animate half a second after the last one.
      });
      setTimeout(function(){
        $(".navbar-mobile button").fadeIn()
      }, 800)
    }
  });
}

function scrollEffect(){
  //Navbar scroll effect
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
      $('nav').addClass('active');
      $(".white").fadeOut()
      $(".black").fadeIn()
    } else {
      $('nav').removeClass('active');
      $(".white").fadeIn()
      $(".black").fadeOut()
    }
  });

}

function initMap() {
  // // The location of Uluru
  // const beyondGrowth = { lat: -6.2261949, lng: 106.8230827 };
  // // The map, centered at Uluru
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 4,
  //   center: beyondGrowth,
  // });
  // // The marker, positioned at Uluru
  // const marker = new google.maps.Marker({
  //   position: beyondGrowth,
  //   map: map,
  // });
}

function growServices(){
  let active = 0;
  $(".section-services .img-step").eq(active).addClass('active')
  setInterval(function(){
    const length = $(".section-services .img-step").length
    const theIndex = active === length-1 ? active = 0 : active+=1
    $(".section-services .img-step").eq(theIndex).addClass('active')
    $(".section-services .img-step").eq(active-1).removeClass('active')
  }, 5000)
}

function growApproach(){
  let active = 0;
  $(".section-approach .img-step").eq(active).addClass('active')
  setInterval(function(){
    const length = $(".section-approach .img-step").length
    const theIndex = active === length-1 ? active = 0 : active+=1
    $(".section-approach .img-step").eq(theIndex).addClass('active')
    $(".section-approach .img-step").eq(active-1).removeClass('active')
  }, 5000)
}

