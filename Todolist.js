let input=document.querySelector(".input")
let btn=document.querySelector(".btn");
// let deletebtn=document.querySelector(".Deletebtn");


btn.addEventListener("click",()=>{
     let ul=document.querySelector(".ul");
    let li=document.createElement("li")
    
    ul.appendChild(li);
    ul.textContent=input.value

 




})
