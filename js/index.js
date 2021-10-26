const baseUrl = "https://www.squareeyes.one/wp-json/wc/store/products";
const dataSection = document.querySelector(".main1");

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    const movie = data;

    data.forEach(function(data) {
        dataSection.innerHTML += `
        <a href="movie.html?id=${data.id}" class="movie">
            <div class="product">
                <h2>${data.name}</h2>
                <img src="${data.images[0].src}" alt="${data.name}"
        </div>
        </a>
        <div class="info">
            <p>${data.short_description}</a>`
        
    })
}

getData(baseUrl);