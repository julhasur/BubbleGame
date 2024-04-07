var timer=6;// for run timmer function
var score=0;//to increase store
var hitrn=0;
function increaseScore(){
   score += 10; 
   document.querySelector("#scoreval").textContent=score;
}

function makeBubble(){
    var clutter="";
for(var i=1;i<=175;i++){
   var rn=Math.floor(Math.random()*10) 
clutter +=`<div class="bubble">${rn}</div>`;

}
// selecting pannel bottom
document.querySelector("#pbottom").innerHTML=clutter; 
}
function runtimer(){
var counter=setInterval(function(){
   if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
   }
   else{
    clearInterval(counter);
    document.querySelector("#pbottom").innerHTML=`<h1>Game Over!<h1>`;
  console.log("ended");
}
},1000);
}
function getnewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
}
//adding bubble event listener
document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickednumber=Number(dets.target.textContent);
    if(clickednumber===hitrn){
        increaseScore();
     
        makeBubble();
        getnewHit();
        
    }
});
makeBubble();
runtimer();
getnewHit();