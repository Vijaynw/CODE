const magnifierEl=document.querySelector(".magnifier")
const searcgBarContainerEl=document.querySelector(".search-bar-container")

magnifierEl.addEventListener("click",()=>{
    searcgBarContainerEl.classList.toggle("active")
    
})