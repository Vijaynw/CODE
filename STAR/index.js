const starsEl = document.querySelectorAll(".fa-star")
// console.log(starsEl)

const emojiEls = document.querySelectorAll(".fa-regular")

const colors=["red","orange","lightblue","lightgreen","green"]
starsEl.forEach((starEl, index) => {

    starEl.addEventListener("click", () => {
        updateRating(index);

    })

})

function updateRating(index) {

    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {

            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    })

    emojiEls.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index*50}px`;
        emojiEl.style.color =colors[index];
        
    })

}
