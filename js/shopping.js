window.addEventListener("load", function(){
    // 탭메뉴 구현
    let tabs = document.querySelectorAll
    (".shopping .slide-tabs li")
    let tabCont=document.querySelectorAll(".shopping .slide-wrap")
    for(let i = 0; i < tabs.length; i++){
        tabs[i].onclick = function(event){
            event.preventDefault()
            for(let j = 0; j < tabs.length; j++){
                tabs[j].classList.remove("active")
                tabCont[j].classList.remove("active")
            }
            this.classList.add("active")
            tabCont[i].classList.add("active")
        }
    }
    //swiper 적용
    let shoppingswiper = new Swiper(".sw-shopping",{
        navigation: {
            nextEl: ".shopping .sw-next",
            prevEl: ".shopping .sw-prev",
           },
        slidesPerView: 2.3,
        spaceBetween: 15,
        grid:{
            rows:2,
            fill:"row",

        }, 
        breakpoints: {
            //화면사이즈가 1024이상일때 작동
           768:{
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
              grid:{
                rows:1,
              },
            },
            1024:{
              slidesPerView: 4,
              spaceBetween: 25,
              slidesPerGroup: 4,
              grid:{
                rows:1,
              },
            },
           
          },

    })

})
