export default 'seventhSection';

new Swiper('.img-container', {
    navigation: {
        nextEl: '.navigator-right',
        prevEl: '.navigator-left',
    },
    loop: true,
    slidesPerView: 1,
    thumbs: {
        swiper: {
            el: '.img-container-mini',
            slidesPerView: 4,
        },
    },
});
