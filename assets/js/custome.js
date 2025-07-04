 document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.slider-wrapper').forEach(function (wrapper) {
            const sliderId = wrapper.dataset.sliderId;
            const splideElement = document.getElementById(sliderId);
            const prevBtn = wrapper.querySelector('.btnPrev');
            const nextBtn = wrapper.querySelector('.btnNext');
            const perPage = parseInt(wrapper.dataset.perPage) || 3;


            if (!splideElement) return;

            const splide = new Splide(splideElement, {
                perPage: perPage,
                gap: "1rem",
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