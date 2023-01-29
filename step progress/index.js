const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");

let currentChecked = 1

nextEl.addEventListener("click", () => {
    currentChecked++;

    if (currentChecked > stepEl.length) {
        currentChecked = stepEl.length;
    }
    updateStepProgress();

})

function updateStepProgress() {
    stepEl.forEach((stepEls, index) => {
        if (currentChecked > index) {
            stepEls.classList.add("checked");
            stepEls.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${
                index === 0 ? "Start" : index === stepEl.length - 1 ? "Final" : "Step " + index
            }
            </small>
            
            `
        } else {
            stepEls.classList.remove("checked");
            stepEls.innerHTML = `
            <i class="fa fa-times"></i>
            `

        }

    })
    const checkedNo = document.querySelectorAll(".checked");
    progressEl.style.width = ((checkedNo.length - 1) / (stepEl.length - 1)) * 100 + "%";
    if(currentChecked===1){
        prevEl.disabled=true;

    }
    else if(currentChecked===stepEl.length){
        nextEl.disabled=true;
    }
    else{
        prevEl.disabled=false;
        nextEl.disabled=false;
    }


}


prevEl.addEventListener("click", () => {
    currentChecked--;

    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepProgress();

})
