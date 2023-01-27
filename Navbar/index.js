const navbarElement = document.querySelector(".navbar")

const bottomContainerElement = document.querySelector(".bottom-container")


console.log(navbarElement.offsetHeight)
console.log(bottomContainerElement.offsetTop)



window.addEventListener("scroll", ()=> {
   
    if(window.scrollY>bottomContainerElement.offsetTop-navbarElement.offsetHeight-50)
    {

        navbarElement.classList.add("active");
    }
    else{
        navbarElement.classList.remove("active");

    }
// console.log(this.window.scrollY)

});