function randomBG()  {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBG() {
    document.body.style.backgroundColor = randomBG();
}


function changeclick() {
    let img = document.getElementById("myImage");
    img.src = (img.src.includes("Walter.png"));
}

flip = () => {
    const image = document.querySelector('img');
    image.classList.toggle('flip');
}