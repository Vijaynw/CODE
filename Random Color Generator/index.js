const containerEl = document.querySelector('.container');


for (let index = 0; index < 33; index++) {
    const colorContainerEl = document.createElement('div');

    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');


// console.log(colorContainerEls)
generateColor()
function generateColor() {
    
    colorContainerEls.forEach((colorContainerEl) => {
        const newcolorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#"+newcolorCode;
        colorContainerEl.innerHTML = newcolorCode;
    });
    
}


randomColor()

function randomColor() {
    const chars = "0123456abcdef"
    const colorCodeLenght = 6;

    let colorCode = ""

    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1)
        // console.log(randomNum)
        // console.log(colorCode,randomNum)
    }
    return colorCode;
}
