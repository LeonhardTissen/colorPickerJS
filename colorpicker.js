const colorpickerjs = {
    saved_colors: []
};

document.querySelectorAll('.colorpickerjs').forEach((element) => {
    element.style.backgroundColor = element.getAttribute('value');
    element.onclick = () => {

    };
});

function adjustColorPickerDot(event) {
    let dot = event.target.children[1];
    dot.style.left = event.layerX + 'px';
    dot.style.top = event.layerY + 'px';
};