setInterval(function(){
document.querySelector('.nameanimation').classList.toggle("nowanimation")
},4000)
document.querySelector('.taskadder').addEventListener("keydown",e=>{
        if(e.key=="Enter"){
        addnow();
        document.querySelector('.taskadder').value=''
        document.querySelector('.taskadder').focus();
}});
function addnow(){
    let taskobject=document.querySelector(".taskadder");
    task=taskobject.value;
    if(task!='' && task!=' ')
{  
    document.querySelector(".alltasks").insertAdjacentHTML("beforeend",
    `<div class="task">
    <p>${task}</p>
    <button class="delete" onclick="removetask(this)"></button>
</div>
    `)}
}
function removetask(e){
    e.parentElement.remove();
}