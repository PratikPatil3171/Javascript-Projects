const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const height = document.querySelector("#height").value
  const result = document.querySelector("#results")
  const weight= document.querySelector("#weight").value
  
 
  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML ='Please Enter Valid Height'
  }else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML ='Please Enter Valid weight'
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // result.innerHTML=`<span>${bmi}</span><br>
    // `
    if (bmi<18.6){
result.innerHTML=`BMI -${bmi}<br> Under Weight`
    }else if(bmi>=18.6 && bmi<=24.9){
      result.innerHTML=`BMI -${bmi}<br> Normal Weight`
    }else{
      result.innerHTML=`BMI -${bmi}<br> OverWeight`
    }
  }
})
