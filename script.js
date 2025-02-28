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

let imagesVisible = false;

document.querySelector('.bag1').addEventListener('click', function() {
    const bag1 = document.querySelector('.bag1');
    const images = document.querySelectorAll('.presentation1 img');
    const linkbag = document.querySelector('.linkbag');
    
    const bag1Rect = bag1.getBoundingClientRect();
    const positions = [
        { top: '-37em', left: '20%' }, // Position pour logo1
        { top: '-15em', left: '14%' }, // Position gauche pour logo2
        { top: '+8em', left: '17%' }, // Position gauche pour logo3
        { top: '-35em', left: '80%' }, // Position droite pour logo4
        { top: '-17em', left: '85%' }, // Position droite pour logo5
        { top: '7em', left: '77%' } // Position droite pour logo6
    ];

    if (!imagesVisible) {
        linkbag.style.display = 'block'; // Afficher le conteneur des images

        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 1; // Afficher l'image
                img.style.transform = `translate(-50%, -50%) scale(1)`; // Appliquer l'effet de zoom
                img.style.top = positions[index].top;
                img.style.left = positions[index].left;
            }, index * 100); // Délai pour chaque image
        });
    } else {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = 0; // Masquer l'image
                img.style.transform = `translate(-50%, -50%) scale(0.7)`; // Réduire la taille
                img.style.top = `${bag1Rect.top + bag1Rect.height / 2}px`; // Centrer verticalement
                img.style.left = `${bag1Rect.left + bag1Rect.width / 2}px`; // Centrer horizontalement
            }, index * 100); // Délai pour chaque image
        });

        setTimeout(() => {
            linkbag.style.display = 'none'; // Masquer le conteneur des images après l'animation
        }, images.length * 100 + 500); // Attendre que toutes les animations soient terminées
    }

    imagesVisible = !imagesVisible;
});
