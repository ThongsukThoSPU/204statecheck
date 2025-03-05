function randomBG()  {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBG() {
    document.body.style.backgroundColor = randomBG();
}

//----------------------------------------------------------
function changeclick() {
    let img = document.getElementById("myImage");

            if (img.src.includes("Mr.Hman.jpg")) {
                img.src = "./pic/Walter.png"; // เปลี่ยนเป็น Walter.png
            } else {
                img.src = "./pic/Mr.Hman.jpg"; // เปลี่ยนกลับเป็น Mr.Hman.jpg
            }
}

flip = () => {
    let img = document.getElementById("myImage");
    
    img.style.transform = 'rotateY(180deg)';
}

resetFlip = () => {
    let img = document.getElementById("myImage");
    img.style.transform = "rotate(0deg)";
}

pressSpace = () => {
    let text = document.getElementById("text").value;
    document.getElementById("text").value = text.toUpperCase();
}


document.getElementById('showText').addEventListener('click', function() {
    document.getElementById('showHere').textContent = "You Clicked";
});
//-----------------------------------------------------------------------

document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let output = document.getElementById('mailoutput');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').textContent = alert('กรุณากรอกอีเมลให้ถูกต้อง');
        return
    }
    else { 
        output.innerText = 'อีเมลถูกต้อง!';
        output.style.color = "green";
     }
}