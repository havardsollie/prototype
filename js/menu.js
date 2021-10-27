const baseUrl = "https://www.squareeyes.one/wp-json/wc/store/products/";
const dataSection = document.querySelector(".main1");
const categories = document.querySelectorAll(".category");

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    const movie = data;
    console.log(data);

    data.forEach(function(data) {
        dataSection.innerHTML += `
        <a href="movie.html?id=${data.id}" class="movie">
            <div class="product">
                <h2>${data.name}</h2>
                <img src="${data.images[0].src}" alt="${data.name}"
        </div>
        </a>
        <div class="info">
            <h3>${data.short_description}</h3>
            <hr>
            <p>$ ${data.prices.regular_price}</p>`     
    })
}

getData(baseUrl);


categories.forEach(function(category) {
    category.onclick = function(event) {
        let newUrl;
        if(event.target.id === "featured") {
            newUrl = baseUrl + "?featured=true";
        }
        else{
            const catChosen = event.target.value;
            newUrl = baseUrl + `?category=${catChosen}`
        }
        dataSection.innerHTML = "";
        getData(newUrl);
    }
})