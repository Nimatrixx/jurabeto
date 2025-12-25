document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // to show current slide
    function showSlide(index) {
        // hiding all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // activate current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // switching to next slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    // switching to previews slide
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }

    // add click listener to btns
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // add click listener to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
});