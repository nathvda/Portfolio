let elem = document.documentElement;

elem.addEventListener('mouseover', (e) => {
    let posX = e.clientX;
    let posY = e.clientY;


    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2 ;

    console.log(centerX);
    console.log(centerY);

    let offsetX = posX - centerX;
    let offsetY = posY - centerY;

    console.log(offsetX);
    console.log(offsetY);

let bubbles = document.querySelectorAll('.bubble');
console.log(bubbles);

for (let bubble of bubbles){
    let dspeed = bubble.dataset.speed;
    bubble.style.transform= `translateY(${(-offsetY / 80) * dspeed}px) translateX(${(offsetX /80) * dspeed}px)`;

}

});