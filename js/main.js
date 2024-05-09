$(document).ready(function () {

  // Modal video
  $('.video--js').on('click', function() {
    var dataYoutube = $(this).attr('data-youtube');
    $(this).html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });

  // Running line
  var swiper = new Swiper(".running-line", {
    loop: true,
    speed: 7000,
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
  });

  // Running line
  var swiper = new Swiper(".present__sl", {
    loop: true,
    speed: 9000,
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
  });

});