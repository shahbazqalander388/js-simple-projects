let apikey = `a4cac524c79daa46227ab36a52c7a3e5`;

let destin = document.querySelector("#destination");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let list = document.querySelector("#list");
let btn = document.querySelector(".btn");
let btnRemove = document.querySelector(".btnRemove"); 

function trip1(e) {
    e.preventDefault();

    if (destin.value && start.value && end.value) {
        let city = destin.value
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        fetch(apiurl)
            .then((response) => response.json())
            .then((data) => {
               
                    let temp = data.main.temp;

                
                    let li = document.createElement("li");
                    li.innerText = `Destination: ${city}, Start: ${start.value}, End: ${end.value}, Temp: ${temp.toFixed(1)} °C`;
                    list.appendChild(li);
         
                destin.value = "";
                start.value = "";
                end.value = "";
            })
            .catch((err) => {
                console.log("Error:", err);
                alert("Failed to fetch weather.");
            });
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
