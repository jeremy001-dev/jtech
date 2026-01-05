let btn = document.getElementById("btn");
let displayName = document.querySelector(".display-name");
let input = document.getElementById("username")


btn.addEventListener("click", function() {
    // alert("Hello World");
    displayName.textContent = input.value;
})



displayName.textContent = "...";