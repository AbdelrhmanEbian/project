var male = document.querySelector("#male");
var female=document.querySelector("#female")
// console.log(text);
var bmi;

var mass = document.getElementById("mass");
var height = document.getElementById("height");
var age = document.getElementById("age");
var p = document.querySelector(".calo p");
var calc=document.querySelector(".calc")
var men;
var p;
var women;
function men() {
 var men=parseInt(66.5+13.8*(mass.valueAsNumber)+ 5*(height.valueAsNumber)/6.8*age.valueAsNumber)
 return men
}
function women() {
  var women=parseInt (655.1+9.6*(mass.valueAsNumber)+1.9*(height.valueAsNumber)/4.7*age.valueAsNumber)

  return women
}

calc.addEventListener("click",()=>{
 if ( mass.valueAsNumber >  0 && height.valueAsNumber > 0 &&  age.valueAsNumber > 0)  {
 if (male.checked) {
   clearTimeout(set)
  var p=document.querySelector("#calo")
  var text= document.createTextNode(men())
  p.textContent="your calories about "
  p.appendChild(text)
  p.style.display="block"
  


 }
 if (female.checked) {
  clearTimeout(set)

  var p=document.querySelector("#calo")
  var text= document.createTextNode(women())
  p.textContent="your calories about "
  p.appendChild(text)
  p.style.display="block"
  
 }
 }
 else{
    var p=document.querySelector("#calo")
    p.textContent="please make sure that your values is correct"
    p.style.display="block"
   var set= setTimeout(function error() {
      p.style.display="none"
    },5000)
}
})


  
// console.log( document.getElementById("mass").value)
