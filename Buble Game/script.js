function makeBubble(){
    var clutter="";
for(var i=1;i<=175;i++){
   var rn=Math.floor(Math.random()*10) 
clutter +=`<div class="bubble">${rn}</div>`;
}
// selecting pannel bottom
document.querySelector("#pbottom").innerHTML=clutter; 
}
var timer=60;
function runtimer(){
var counter=setInterval(function(){
   if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
   }
   else{
    clearInterval(counter);
   }
},1000);
}
function getnewHit(){
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=rn;
}

runtimer();
makeBubble();
getnewHit();