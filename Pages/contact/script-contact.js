document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector(".cursor");
    const texts = document.querySelectorAll(".text");

    document.addEventListener("mousemove", (e) => {
        const cursorSize = cursor.offsetWidth / 2;
        cursor.style.left = `${e.clientX - cursorSize}px`;
        cursor.style.top = `${e.clientY - cursorSize}px`;
    });

    texts.forEach(text => {
        text.addEventListener("mouseenter", () => {
            text.style.color = "black";
        });

        text.addEventListener("mouseleave", () => {
            text.style.color = "black";
        });
    });
});