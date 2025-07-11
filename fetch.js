const url="https://dog.ceo/api/breeds/image/random"
let para=document.querySelector(".para")
let btn=document.querySelector(".btn")

// let checkapi= async()=>{
//     let response= await fetch(url);
//     console.log(response);
//     let data=await response.json()
//     // console.log(data.status);
//     para.innerText=data.body
    
    

// }
// btn.addEventListener("click",checkapi)
// // checkapi();
function api(){
    fetch(url).then((respnse)=>{
       return respnse.json();
    }).then((data)=>{
         para.innerText=data.status
        console.log(data);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
btn.addEventListener("click",api)
