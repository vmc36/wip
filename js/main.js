const swiper = new Swiper('.swiper', {

    autoplay:{
      delay:1000
    },

    slidesPerView: 2,
    effect: 'coverflow',
    spaceBetween:1,
    coverflowEffect: {
    rotate: 1,
    stretch:1,
    slideShadows: false,
    centeredSlides:true,
    rewind:true,
  },
  });


