window.addEventListener("load", function(){
  //이벤트 데이터
  let eventData = {
    item_count: 16,
    item_1:{link:"#", pic:"event_1.jpg"},
    item_2:{link:"#", pic:"event_2.jpg"},
    item_3:{link:"#", pic:"event_3.jpg"},
    item_4:{link:"#", pic:"event_4.png"},
    item_5:{link:"#", pic:"event_5.jpg"},
    item_6:{link:"#", pic:"event_6.png"},
    item_7:{link:"#", pic:"event_7.jpg"},
    item_8:{link:"#", pic:"event_8.png"},
    item_9:{link:"#", pic:"event_9.jpg"},
    item_10:{link:"#", pic:"event_10.jpg"},
    item_11:{link:"#", pic:"event_11.jpg"},
    item_12:{link:"#", pic:"event_12.jpg"},
    item_13:{link:"#", pic:"event_13.jpg"},
    item_14:{link:"#", pic:"event_14.png"},
    item_15:{link:"#", pic:"event_15.jpg"},
    item_16:{link:"#", pic:"event_16.jpg"},
  }

  let swEventHtml = ``;
  for(let i = 0; i < eventData.item_count; i++){
    let obj = eventData[`item_${i+1}`];
    let temp = `
     <li class="swiper-slide">
         <a href="${obj.link}">
            <img src="img/${obj.pic}" alt="">
         </a>
     </li>
     `
     swEventHtml += temp; 

  }
  let swEventWeapper = document.querySelector(".sw-event .swiper-wrapper");
  swEventWeapper.innerHTML = swEventHtml;
 let eventSwiper = new Swiper(".sw-event", {
       
    navigation: {
        nextEl: ".event .sw-next",
        prevEl: ".event .sw-prev",
    },
    slidesPerView: 3,
    spaceBetween: 27,
    // loop 기본값은 false
    breakpoints: {
        //화면사이즈가 1024이상일때 작동
        320:{
        slidesPerView: 2,
        spaceBetween: 25,
        },
        760:{
        slidesPerView: 3,
        spaceBetween: 25,
        },
        1280:{
        slidesPerView: 4,
        spaceBetween: 25,
        },
    
    },
    })
});






