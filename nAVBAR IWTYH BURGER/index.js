const barEl=document.querySelector(".icon")

const menuEl=document.querySelector(".menu");

barEl.addEventListener("click",()=>{

    menuEl.classList.toggle("show-menu")
})