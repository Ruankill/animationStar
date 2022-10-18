var i=0;
setTimeout(animation,1)
function animation(){
   while (i<30){
   var c=document.getElementById("animation");   
   var x=document.createElement("div");  
   var r=Math.random()+10*10;
   x.style.height=r+"px";
   x.style.width="3px"
   x.style.left=Math.random()*100+"%"
   x.style.animationDuration=Math.random()*1000+"ms"
   x.style.animationPlayState="0ms"
   i++;
   c.appendChild(x)
   }
}
