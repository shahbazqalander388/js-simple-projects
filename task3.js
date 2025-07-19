
  let Name = document.querySelector(".name");
let email = document.querySelector(".email");
let pass = document.querySelector(".password");
let btn = document.querySelector(".btn");
let result = document.querySelector(".list");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    result.innerHTML = ""; // Clear previous results

    // Name validation
    if (Name.value.length < 3) {
        let li = document.createElement("li");
        li.innerHTML = "Name must be at least 3 characters.";
        result.appendChild(li);
    } else {
        let li = document.createElement("li");
        li.innerHTML = `Name: ${Name.value}`;
        result.appendChild(li);
    }
    const emaill = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emaill.test(email.value)) {
        let li = document.createElement("li");
        li.innerHTML = "Invalid email format.";
        result.appendChild(li);
    } else {
        let li = document.createElement("li");
        li.innerHTML = `Email: ${email.value}`;
        result.appendChild(li);
    }

    // Password validation (min 6 chars & 1 number)
    const pas = /^(?=.*\d).{6,}$/;
    if (!pas.test(pass.value)) {
        let li = document.createElement("li");
        li.innerHTML = "Password must be at least 6 characters and include a number.";
        result.appendChild(li);
    } else {
        let li = document.createElement("li");
        li.innerHTML = `Password: ${pass.value}`;
        result.appendChild(li);
    }
});
