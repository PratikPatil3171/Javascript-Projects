const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")
buttons.forEach((l)=>{
  l.addEventListener("click",(event)=>{
  if(event.target.id == "grey"){
    body.style.backgroundColor = "grey"
    setInterval(()=>{
      body.style.backgroundColor = "white"
    },3000)
    
  } if(event.target.id == "white"){
    body.style.backgroundColor = "white"
  } if(event.target.id == "blue"){
    body.style.backgroundColor = "blue"
    setInterval(()=>{
      body.style.backgroundColor = "white"
    },3000)
  } if(event.target.id == "yellow"){
    body.style.backgroundColor = "yellow"
    setInterval(()=>{
      body.style.backgroundColor = "white"
    },3000)
  }

  
  })
})