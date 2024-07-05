     //swiper//
let swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
   
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //resposive design//
  let menu=document.querySelector('#menu-icon');
  let navbar=document.querySelector('.navbar');
  menu.onclick=()=>{
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
  }
  window.onscroll=()=>{
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
  }