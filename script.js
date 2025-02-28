window.addEventListener('scroll', function() {
    const titre1 = document.querySelector('.titre1');
    const bag1 = document.querySelector('.bag1');
    const titre1Rect = titre1.getBoundingClientRect();
    const scrollDistance = window.scrollY;

    // Appliquer l'effet de zoom en fonction de la distance de défilement
    if (scrollDistance > titre1Rect.bottom) {
        let scale = 0.7 + (scrollDistance - titre1Rect.bottom) / 1000;
        if (scale > 1.1) {
            scale = 1.1; // Limiter l'échelle maximale à 1.1
        }
        bag1.style.transform = `scale(${scale})`;
    } else {
        bag1.style.transform = 'scale(0.7)';
    }
});