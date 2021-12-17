const baseUrl = "https://www.squareeyes.one/wp-json/wc/store/products/?featured=true";
const dataSection = document.querySelector(".main3");

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(function(data) {
        dataSection.innerHTML += `
        <div class="watchlist">
            <div class="product">
                <h2>${data.name}</h2>
                <img src="${data.images[0].src}" alt="${data.name}"
        </div>
        </div>`
    })
}

getData(baseUrl);