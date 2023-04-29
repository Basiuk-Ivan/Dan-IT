const animItems = document.querySelectorAll('._anim-items');

if (!!animItems.length) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        animItems.forEach(animItem => {

            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const windowHeight = window.innerHeight;

            const animPointTop = animItemOffset - windowHeight;
            const animPointBottom = animItemOffset + animItemHeight;

            if (scrollY > animPointTop && scrollY < animPointBottom) {
                animItem.classList.add('_active');
            } else if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
            }
        })
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => animOnScroll(), 300);
}
