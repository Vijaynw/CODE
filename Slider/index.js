const imgContainerEl = document.querySelector('.img-container');

const nextEl = document.querySelector('.next');

const prevEl = document.querySelector('.prev');

const imgEl = document.querySelectorAll("img");

let currentImg = 1
let timeOut;
nextEl.addEventListener("click", () => {
    currentImg++;

    clearTimeout(timeOut)
    updateImg();

})
prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut)

    updateImg();

})

updateImg();
function updateImg() {


    if (currentImg > imgEl.length) {
        currentImg = 1

    } else if (currentImg < 1) {
        currentImg = imgEl.length

    }

    imgContainerEl.style.transform = `translateX(-${
        (currentImg - 1) * 500
    }px)`

    timeOut = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 1000)

}
