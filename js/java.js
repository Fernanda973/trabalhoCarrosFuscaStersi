// Alterado o seletor para '.marcas-slider'
const sliders = document.querySelectorAll(".marcas-slider");

// Certifique-se de que o Swiper.js e seus arquivos CSS/JS estão importados antes deste script.

if (!sliders.length) return;

const list = [];

sliders.forEach((element) => {
    // Estas classes agora são esperadas dentro do .marcas-slider (elemento)
    const [slider, prevEl, nextEl, pagination] = [
        element.querySelector(".swiper"),
        element.querySelector(".slider-nav__item_prev"),
        element.querySelector(".slider-nav__item_next"),
        element.querySelector(".slider-pagination")
    ];

    list.push(
        new Swiper(slider, {
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 600,
            observer: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            initialSlide: 1,
            // Certifique-se de que 'nextEl' e 'prevEl' são os elementos DOM corretos
            navigation: { nextEl, prevEl, disabledClass: "disabled" }, 
            pagination: {
                el: pagination,
                type: "bullets",
                modifierClass: "slider-pagination",
                bulletClass: "slider-pagination__item",
                bulletActiveClass: "active",
                clickable: true
            },
            breakpoints: {
                768: { spaceBetween: 40 }
            }
        })
    );
});