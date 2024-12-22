const navLinks = document.querySelectorAll(".nav-menu .nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visiblity
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked 

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// close menu when the nav link is clicked 
navLinks.forEach(link => {
    link.addEventListener("click", ()=>menuOpenButton.click()
    );
})

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCurs:true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints:{
        0:{
            slidesPreview:1
        },
        768:{
            slidesPreview:2
        },
        1024:{
            slidesPreview:3
        },
    }
  
  });