const div = document.getElementById("div");

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    products.forEach((el) => {
        div.innerHTML += `
            <div>
                <p>${el.title}</p>
            </div>
        `;
    })
    
}

fetchProducts();