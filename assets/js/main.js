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
  $('.play').click(function () {
      if($(this).parent().prev().get(0).paused){
          $(this).parent().prev().get(0).play();
          $(this).parent().prev().removeClass('blurEffect');
          $('.content').hide();
      }
  });

  $('.video').on('ended',function(){
      $(this).addClass('blurEffect');
    $('.content').show();
  });
  growServices()
  growApproach()
  scrollEffect()
  hamburger()
  badgeBlackShow()
})

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
  // The location of Uluru
  const beyondGrowth = { lat: -6.2261949, lng: 106.8230827 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: beyondGrowth,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: beyondGrowth,
    map: map,
  });
}

function growServices(){
  let active = 0;
  $(".section-services .img-step").eq(active).addClass('active')
  setInterval(function(){
    const length = $(".img-step").length
    const theIndex = active === length-1 ? active = 0 : active+=1
    $(".section-services .img-step").eq(theIndex).addClass('active')
    $(".section-services .img-step").eq(active-1).removeClass('active')
  }, 5000)
}

function growApproach(){
  let active = 0;
  $(".section-approach .img-step").eq(active).addClass('active')
  setInterval(function(){
    const length = $(".img-step").length
    const theIndex = active === length-1 ? active = 0 : active+=1
    $(".section-approach .img-step").eq(theIndex).addClass('active')
    $(".section-approach .img-step").eq(active-1).removeClass('active')
  }, 5000)
}

