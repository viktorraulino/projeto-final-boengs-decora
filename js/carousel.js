document.addEventListener('DOMContentLoaded', () => {
    // Aguarda o HTML ser carregado antes de procurar os elementos do carrossel.
    const slide = document.querySelector('.carousel-slide');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // counter guarda a posição atual; totalItems informa quantos slides existem.
    let counter = 0;
    const totalItems = items.length;

    function updateCarousel() {
        // translateX desloca a faixa em passos de 100%, mostrando um slide por vez.
        slide.style.transform = `translateX(${-counter * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        // O operador % volta ao primeiro slide quando avançamos além do último.
        counter = (counter + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        // Soma totalItems antes do % para evitar um índice negativo ao voltar do início.
        counter = (counter - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // setInterval repete a troca automaticamente a cada 5.000 milissegundos.
    setInterval(() => {
        counter = (counter + 1) % totalItems;
        updateCarousel();
    }, 5000);
});