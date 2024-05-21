let a=document.querySelector(".i");
let b=document.querySelector(".j");
let c=document.querySelector("button");
let q=document.querySelector(".tim");


c.addEventListener("click",function()
{
  if(a.value=="" || b.value=="")
  {
      q.innerText="Enter the value...";
  }
  else{

  
  var bmi = b.value / ((a.value / 100) ** 2);
var category = "";

if (bmi < 18.5) {
category = "Underweight";
} else if (bmi < 25) {
category = "Normal weight";
} else if (bmi < 30) {
category = "Overweight";
} else {
category = "Obese";
}
bmi=bmi.toFixed(2);
q.classList.add("kim");

q.innerText=`Your Bmi is ${bmi} (${category})`;
  }
});
