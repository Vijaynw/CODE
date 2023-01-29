const monthInx = new Date().getMonth();
console.log(monthInx)

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
let firstDays = new Date(new Date().getFullYear(), monthInx, 1).getDay()-1;
const monthEl = document.querySelector(".date h1")

const fullDateEl = document.querySelector(".date p")

const daysEl = document.querySelector(".days")
console.log(lastDay)

if (firstDays == -1) {

    firstDays = 6
}



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

monthEl.innerText = months[monthInx]
fullDateEl.innerText = new Date().toDateString()

let days = ""
for (i = firstDays; i > 0; i --) {
    days += `<div class="empty"></div>`
}

for(i=1;i<=lastDay;i++){
    if(i==new Date().getDate()){
        days+=`<div class="today">${i}</div>`
    }
    else{
        days+=`<div>${i}</div>`
    }
}

daysEl.innerHTML=days