document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.carousel-slide');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 0;
    const totalItems = items.length;

    function updateCarousel() {
        slide.style.transform = `translateX(${-counter * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        counter = (counter + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        counter = (counter - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Transição automática a cada 5 segundos
    setInterval(() => {
        counter = (counter + 1) % totalItems;
        updateCarousel();
    }, 5000);
});