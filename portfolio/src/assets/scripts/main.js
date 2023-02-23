let elem = document.documentElement;

elem.addEventListener('mouseover', (e) => {
    let posX = e.clientX;
    let posY = e.clientY;

    console.log(posX);
    console.log(posY);

});