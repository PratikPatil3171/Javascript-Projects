 const randomcolor = function(){
   const hex='0123456789ABCDEF'
   let color = '#'
   for(i=0;i<6;i++){
     color+= hex[Math.floor(Math.random()*16)]
   }
   return color
  }
 let interval;
  const changecolor = function(){
if(!interval){
  interval = setInterval(Changecolor,1000)
}
function Changecolor(){
  document.body.style.backgroundColor = randomcolor()
}
  }
  const stopcolorchange = function(){
    clearInterval(interval)
    interval = null
  }
 document.querySelector("#start").addEventListener("click",changecolor)
 document.querySelector("#stop").addEventListener("click",stopcolorchange)