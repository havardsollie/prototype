const baseUrl = "https://www.squareeyes.one/wp-json/wc/store/products/";
const dataSection = document.querySelector(".main3");

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(function(data) {
        for (let i = 0; i < data.length; i++)
        dataSection.innerHTML += `
            <div class="product">
                <h2>${data.name}</h2>
                <img src="${data.images[0].src}" alt="${data.name}"
        </div>`     
    })
}

getData(baseUrl);