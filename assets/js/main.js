var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
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
  grow()
})

function grow(){
  let active = 0;
  $(".img-step").eq(active).addClass('active')
  setInterval(function(){
    const length = $(".img-step").length
    const theIndex = active === length-1 ? active = 0 : active+=1
    $(".img-step").eq(theIndex).addClass('active')
    $(".img-step").eq(active-1).removeClass('active')
  }, 5000)
}

