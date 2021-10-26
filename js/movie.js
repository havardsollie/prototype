const moviePage = document.querySelector(".main1");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://www.squareeyes.one/wp-json/wc/store/products/" + id;

async function goToMovie() {

        const response = await fetch(url);
        const details = await response.json();
        console.log(details);
        createHTML(details);
        
}  


goToMovie();

function createHTML(details) {
    moviePage.innerHTML += 
            `<div class="result">
            <h1>${details.name}</h1>
            <em>${details.short_description}</em>
            <hr>
            <p>$ ${details.price}</p>
            <hr>
            <img src="${details.images[0].src}" alt="${details.name}" />
            </div>`
}

