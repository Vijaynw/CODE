const bgImgEl=document.getElementById("bg-image");

window.addEventListener("scroll",()=>{
    updateImg();

})

function updateImg(){

bgImgEl.style.opacity=1-(window.pageYOffset/800)
bgImgEl.style.backgroudSize=160-(window.pageYOffset/12)+"%"
}