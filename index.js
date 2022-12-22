let countEl=document.getElementById("count-el")
let count=0
let totcount=0


function increment(){
    count+=1
    totcount+=1
    countEl.textContent=totcount
}

function decrement(){
    count-=1
    totcount-=1
    countEl.textContent=totcount
}

// let welcomeEl=document.getElementById("welcome-el")
// let names="joy"
// let greetings="hi, welcome back "
// let final=greetings + names + " !"
// welcomeEl.innerText=final
// welcomeEl.innerText += ":>"


let saveEl=document.getElementById("save-el")
function save(){
let sep=count+" - "
saveEl.textContent+=sep
countEl.textContent=0
totcount=0
console.log(count)
}
