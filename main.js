const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var elemC = document.querySelector(".elem-container")
var fixImage = document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixImage.style.display = "block"

})
elemC.addEventListener("mouseleave",function(){
    fixImage.style.display = "none"

})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixImage.style.backgroundImage = `url(${image})`
    })

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%"
},11000)

























