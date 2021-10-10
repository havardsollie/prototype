const button = document.querySelector("#cartButton");
const rows = document.querySelector(".cart-row");
const section = document.querySelector(".cart-items");
const element = document.querySelector("#one");

button.addEventListener("click", function() {
    element.remove("#one");
    section.innerHTML += `<div class="removed">
                        <p>The movie has been removed</p>
                        </div>`
})

