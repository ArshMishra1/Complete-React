let counNumber=document.querySelector("h1")
let button1=document.querySelector(".btn1")
let button2=document.querySelector(".btn2")
let number=0;
let increment= function(){
   number++
   counNumber.textContent=number
}
let Decrement= function(){
number--
   counNumber.textContent=number

}

button1.addEventListener("click" ,increment)
button2.addEventListener("click" ,Decrement)