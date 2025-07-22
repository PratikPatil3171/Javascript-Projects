const insert = document.querySelector("#insert")
window.addEventListener("keydown",(e)=>{
  
insert.innerHTML = `The value of the key is ${e.key}.<br> The code is ${e.code}.<br> The keyCode is ${e.keyCode}.`
})