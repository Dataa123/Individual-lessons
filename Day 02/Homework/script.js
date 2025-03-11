const apiLink = "https://fakestoreapi.com/products";
const main = document.querySelector("main");

fetch(apiLink)
    .then((data) => data.json())
    .then((res) => {
        res.forEach(el => {
            main.innerHTML += `
                <div style="border: 1px solid black; width: 500px; height: 400px;">
                    <p>Title: ${el.title}</p>
                    <p>Price: ${el.price}</p>
                    <p>Description: ${el.description}</p>
                    <p>Category: ${el.category}</p>
                    <img src="${el.image}" width=100 />
                </div>
            `
        });
    });