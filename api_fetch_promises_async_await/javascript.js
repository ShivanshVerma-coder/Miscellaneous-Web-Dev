let timer
let lastbreedbeforestop
let i=0
async function start(){
    let breedlist=await fetch("https://dog.ceo/api/breeds/list/all")
    let data=await breedlist.json();
    createbreedlist(data.message)
}
start()
function createbreedlist(data)
{document.querySelector(".breedlist").insertAdjacentHTML("beforeend",`
    ${Object.keys(data).map(breed=>`<option>${breed}</option>`).join('')}
`)
}
async function findimages(e)
{lastbreedbeforestop=e
    if(e!="Choose a Breed")
    {
        let imageurlobject=await fetch(`https://dog.ceo/api/breed/${e}/images`)
        let imageurljson=await imageurlobject.json();
        imageurlarray=imageurljson.message
        clearInterval(timer)
        document.querySelector(`.images`).innerHTML=`
        <img src="${imageurlarray[i]}" alt="" width="500px" >`
        timer=await setInterval( function()
        {
            document.querySelector(`.images`).innerHTML=`
            <img src="${imageurlarray[i]}" alt="" width="500px" >`
            if(i==imageurlarray.length)
            {i=-1;}
                i=i+1
        },4000)
       
    }else{
        clearInterval(timer)
        document.querySelector(`.images`).innerHTML=``
        return;
    }
}
function stop(){
    clearInterval(timer)
}
function play(){
    clearInterval(timer)
    findimages(lastbreedbeforestop)
}
function previous(){
    clearInterval(timer)
    i=i-1
    document.querySelector(`.images`).innerHTML=`
            <img src="${imageurlarray[i]}" alt="" width="500px" >`
}
function doj(ppp){
    i=0
    clearInterval(timer)
    findimages(ppp)
}