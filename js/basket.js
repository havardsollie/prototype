const button = document.querySelector("#addButton");
const basket = document.querySelector("#basket");
const feedback = document.querySelector(".feedback");


button.addEventListener("click", function () {
        basket.innerHTML += `<p>1</p>`;
        feedback.innerHTML += `<p>This movie has been added to your basket.</p>`;
        button.disabled = true;
});


