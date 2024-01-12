window.addEventListener("load", function(){
    var swiper = new Swiper(".sw-todaypick", {
       
        navigation: {
        nextEl: ".todaypick .sw-next",
        prevEl: ".todaypick .sw-prev",
       },
       loop:true,
       pagination:{
         el: ".sw-todaypick-pg",
         clickable : true,
       },
       // loop 기본값은 false
       breakpoints: {
        //화면사이즈가 1024이상일때 작동
        320:{
          slidesPerView: 1,
          spaceBetween: 25,
        },
        760:{
          slidesPerView: 2,
          spaceBetween: 25,
        },
       
      },
    });












})