const btnEl=document.querySelector(".btn");

const containerEl = document.querySelector(".container");

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