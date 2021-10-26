const moviePage = document.querySelector(".main1");
const queryString = document.location.search.substring(1);
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://www.squareeyes.one/wp-json/wc/store/products/" + id;

async function goToMovie(url) {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);   
}  


goToMovie(url);

function createHTML(data) {
    const moviePage = document.querySelector(".under2");

    moviePage.innerHTML = 
    `
    <h1>${data.name}</h1>
    <em>${data.short_description}</em>
    <hr>
    <p>$ ${data.price}</p>
    <hr>
    <img src="${data.image[0].src}" alt="${data.name}" />`
}