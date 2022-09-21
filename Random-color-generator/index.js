const container = document.querySelector(".container");
for (let i = 0; i < 2000; i++) {
    const colorContainer  = document.createElement("div");
    colorContainer.classList.add("color-container");
    const clr = randomColor();
    colorContainer.innerHTML = "#" + clr;
    colorContainer.style.setProperty("background-color", "#"+clr);
    container.appendChild(colorContainer);
    }

function randomColor(){
    const chars = "0123456789abcdef";
    let colorCode = "";
    for (let i = 0; i < 6; i++) {
        const randNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.charAt(randNum);    
    }
    return colorCode;
}