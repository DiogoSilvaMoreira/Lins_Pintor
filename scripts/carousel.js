document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    // Função para atualizar a posição do carrossel
    const updateCarousel = () => {
        const itemWidth = items[0].offsetWidth + 10; // Inclui margem
        carousel.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    };

    // Adiciona rolagem automática
    setInterval(() => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 3000); // 3 segundos
});
