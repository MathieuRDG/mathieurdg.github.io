function openMacWindow(imageSrc) {
    document.getElementById('macImage').src = imageSrc;
    document.getElementById('macWindow').style.display = 'block';
}
function closeMacWindow() {
    document.getElementById('macWindow').style.display = 'none';
}

function startDrag(e) {
    let windowElement = document.getElementById('macWindow');
    let offsetX = e.clientX - windowElement.offsetLeft;
    let offsetY = e.clientY - windowElement.offsetTop;

    function moveWindow(event) {
        windowElement.style.left = event.clientX - offsetX + 'px';
        windowElement.style.top = event.clientY - offsetY + 'px';
    }

    function stopDrag() {
        document.removeEventListener('mousemove', moveWindow);
        document.removeEventListener('mouseup', stopDrag);
    }

    document.addEventListener('mousemove', moveWindow);
    document.addEventListener('mouseup', stopDrag);
}