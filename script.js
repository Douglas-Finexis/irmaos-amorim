document.addEventListener('DOMContentLoaded', function() {
    let indexAtual = 0;
    const slides = document.querySelectorAll('.imagens-carrossel .slide');
    const totalSlides = slides.length;
    const prox = document.querySelector('.prox');
    const volt = document.querySelector('.volt');

    function mostraSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('ativo', i === index);
        });
    }

    // Inicia o carrossel
    mostraSlide(indexAtual);

    prox.addEventListener('click', function() {
        indexAtual = (indexAtual + 1) % totalSlides;
        mostraSlide(indexAtual);
    });

    volt.addEventListener('click', function() {
        indexAtual = (indexAtual - 1 + totalSlides) % totalSlides;
        mostraSlide(indexAtual);
    });

    // Gira o carrossel automaticamente 
    setInterval(() => {
        indexAtual = (indexAtual + 1) % totalSlides;
        mostraSlide(indexAtual);
    }, 9000);

});



// Ativa o menu toggle para telas pequenas
function toggleMenu() {
    const menu = document.querySelector('.menu-list');
    menu.classList.toggle('show');
}