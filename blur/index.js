const btnEl=document.querySelector(".btn");

console.log(btnEl)

const containerEl = document.querySelector(".container");

console.log(containerEl)
const  popupEl = document.querySelector(".popup-container");

const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click",()=>{
    
    containerEl.classList.add("active");
    popupEl.classList.remove("active");
});

closeIconEl.addEventListener("click",()=>{
    
    
        containerEl.classList.remove("active");
        popupEl.classList.add("active");
});