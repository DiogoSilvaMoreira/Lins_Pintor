document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    // Configura os botões de navegação
    prevButton.textContent = '❮';
    nextButton.textContent = '❯';
    prevButton.classList.add('carousel-control', 'prev');
    nextButton.classList.add('carousel-control', 'next');
    carousel.parentElement.appendChild(prevButton);
    carousel.parentElement.appendChild(nextButton);

    let currentIndex = 0;

    // Função para atualizar a posição do carrossel
    const updateCarousel = () => {
        const itemWidth = items[0].offsetWidth + 10; // Inclui margem
        carousel.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    };

    // Eventos para os botões
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Adiciona rolagem automática
    setInterval(() => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000); // 5 segundos
});
