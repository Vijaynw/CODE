const counterEl=document.querySelector(".counter");
const barFrontEl=document.querySelector(".loading-bar-front");


let index=0
updateNum()
function updateNum(){
counterEl.innerText = index+"%";
barFrontEl.style.width=index+"%"
index++;
if(index<101){
    setTimeout(updateNum,100)
}
if(index==100){
    // barFrontEl.style.background="green"
    
}
}