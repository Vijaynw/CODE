const buttonEl = document.getElementById("btn");

const animecontainerEl=document.querySelector(".anime-container");

const animeImgEl=document.querySelector(".anime-img");
const animeNameEl=document.querySelector(".anime-name");


buttonEl.addEventListener("click", async (e) => {
    try {
        
        buttonEl.disabled = true;
        buttonEl.innerText = "Loading...";
        const response = await fetch("http://api.catboys.com/img")
    
        const data = await response.json();
        buttonEl.innerText = "Get Anime";
        buttonEl.disabled = false;
        // console.log(data.url);
        animecontainerEl.style.display = "block";
        
        animeImgEl.src = data.url;
        
        animeNameEl.innerText = data.artist;
        
    } catch (error) {
        // console.log(error);
        
        buttonEl.innerText = "Get Anime";
        buttonEl.disabled = false;

        animeNameEl.innerText="Please try again"
        
    }

    
    



})