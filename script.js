window.addEventListener('scroll', function() {
    const titre1 = document.querySelector('.titre1');
    const bag1 = document.querySelector('.bag1');
    const titre1Rect = titre1.getBoundingClientRect();
    const scrollDistance = window.scrollY;

    // Appliquer l'effet de zoom en fonction de la distance de défilement
    if (scrollDistance > titre1Rect.bottom) {
        let scale = 0.7 + (scrollDistance - titre1Rect.bottom) / 1000;
        if (scale > 1.1) {
            scale = 1.3; // Limiter l'échelle maximale à 1.1
        }
        bag1.style.transform = `scale(${scale})`;
    } else {
        bag1.style.transform = 'scale(0.7)';
    }
});

document.querySelector('.bag1').addEventListener('click', function() {
    const bag1 = document.querySelector('.bag1');
    const images = document.querySelectorAll('.presentation1 img');
    const linkbag = document.querySelector('.linkbag');
    
    linkbag.style.display = 'block'; // Afficher le conteneur des images

    const bag1Rect = bag1.getBoundingClientRect();
    const positions = [
        { top: bag1Rect.top, left: bag1Rect.left - 100 }, // Position gauche pour logo1
        { top: bag1Rect.top + 100, left: bag1Rect.left - 100 }, // Position gauche pour logo2
        { top: bag1Rect.top + 200, left: bag1Rect.left - 100 }, // Position gauche pour logo3
        { top: bag1Rect.top, left: bag1Rect.right + 50 }, // Position droite pour logo4
        { top: bag1Rect.top + 100, left: bag1Rect.right + 50 }, // Position droite pour logo5
        { top: bag1Rect.top + 200, left: bag1Rect.right + 50 } // Position droite pour logo6
    ];

    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1; // Afficher l'image
            img.style.transform = `translate(-50%, -50%) scale(1)`; // Appliquer l'effet de zoom
            img.style.top = `${positions[index].top}px`;
            img.style.left = `${positions[index].left}px`;
        }, index * 100); // Délai pour chaque image
    });
});
