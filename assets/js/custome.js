 document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.slider-wrapper').forEach(function (wrapper) {
            const sliderId = wrapper.dataset.sliderId;
            const splideElement = document.getElementById(sliderId);
            const prevBtn = wrapper.querySelector('.btnPrev');
            const nextBtn = wrapper.querySelector('.btnNext');
            const perPage = parseInt(wrapper.dataset.perPage) || 3;

            const gap = "1rem";

            if (perPage < 1){
               const gap = "1px";
            }


            if (!splideElement) return;

            const splide = new Splide(splideElement, {
                perPage: perPage,
                gap: gap,
                breakpoints: {
                    992: { perPage: 3 },
                    768: { perPage: 2 },
                    576: { perPage: 1 },
                },
                pagination: false,
                arrows: false,
            });

            splide.mount();

            prevBtn.addEventListener("click", () => splide.go("<"));
            nextBtn.addEventListener("click", () => splide.go(">"));
        });
    });

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#experience-slider', {
        type: 'loop',
        perPage: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
    }).mount();
});

flatpickr("#dateInput", {
  enableTime: false,
  dateFormat: "Y-m-d",
  defaultDate: new Date(),
});
