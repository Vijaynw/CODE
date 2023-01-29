const inputEl=document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked=JSON.parse(localStorage.getItem("mode"))
updateBody();

inputEl.addEventListener("input", ()=>{

    updateBody();
    updateLocalStorages();
});

function updateBody() {

     if(inputEl.checked){
         bodyEl.style.backgroundColor="black";
        }
        else{
        bodyEl.style.backgroundColor="white";

     }
}

function updateLocalStorages() {
    localStorage.setItem("mode",JSON.stringify(inputEl.checked ))
}