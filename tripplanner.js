// let destin=document.querySelector("#destination");


// let list=document.querySelector("#list");
// let btn=document.querySelector(".btn");
// // console.log(destin,start,end,list);
// btn.addEventListener("click",function trip1(){
   
//     let start=document.querySelector("#start")
//     let end=document.querySelector("#end")
   

    
//     let list=document.querySelector("#list");
//     let li=document.createElement("li")
//     console.log(li);
//     list.appendChild(li);
//     console.log(list);
    
//     start.value=li.innerText;
//     end.value=li.innerText
    


// })
let destin = document.querySelector("#destination");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let list = document.querySelector("#list");
let btn = document.querySelector(".btn");
let btnRemove = document.querySelector(".btnRemove"); 

function trip1(e) {
    e.preventDefault();

    if (destin.value && start.value && end.value) {
        let li = document.createElement("li");
        li.innerText = `Destination: ${destin.value}, Start: ${start.value}, End: ${end.value}`;
        list.appendChild(li);

        destin.value = "";
        start.value = "";
        end.value = "";
    } else {
        alert("Please fill all fields.");
    }
}

btn.addEventListener("click", trip1);

btnRemove.addEventListener("click", function (e) {
    e.preventDefault();
    btn.removeEventListener("click", trip1);
    alert("Trip add function has been disabled.");
});

