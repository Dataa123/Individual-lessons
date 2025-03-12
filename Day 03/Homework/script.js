const apiLink = "https://fakestoreapi.com/products";
const main = document.querySelector("main");
const cartDiv = document.getElementById('cart');
const cart = [];

fetch(apiLink)
    .then((data) => data.json())
    .then((res) => {
        res.forEach((el) => {
            main.insertAdjacentHTML("beforeend", `
                <div style="border: 1px solid black; width: 500px; height: 400px;">
                    <p>Title: ${el.title}</p>
                    <p>Price: ${el.price}</p>
                    <p>Description: ${el.description}</p>
                    <p>Category: ${el.category}</p>
                    <img src="${el.image}" width=100 />
                    <button id="item${el.id}">Add to cart</button>
                </div>
            `);
            const btn = main.querySelector(`#item${el.id}`);
            btn.addEventListener('click', () => {
                if (btn.textContent != "Added"){
                    cart.push({title: el.title, price: el.price, quantity: 1});
                    console.log(cart);
                }
                btn.textContent = "Added";
            });
        });
    });

const showCart = document.getElementById("show-cart");

showCart.addEventListener('click', () => {
    cartDiv.innerHTML = "";
    cart.forEach((el, index) => {
        cartDiv.insertAdjacentHTML("beforeend", `
            <div style="border: 1px solid black; width: 500px; height: 200px;">
                <p>Title: ${el.title}</p>
                <p>Price: ${el.price}</p>
                <p id="quantity${index}">Quantity: ${el.quantity}</p>
                <button id="plus${index}">+1</button>
                <button id="minus${index}">-1</button>
            </div>    
        `);
        const btn1 = cartDiv.querySelector(`#plus${index}`);
        const btn2 = cartDiv.querySelector(`#minus${index}`);
        const quantity = cartDiv.querySelector(`#quantity${index}`);
        btn1.addEventListener("click", () => {
            quantity.innerHTML = `Quantity: ${Number(quantity.innerHTML.split(" ")[1]) + 1}`;
        })
        btn2.addEventListener("click", () => {
            quantity.innerHTML = `Quantity: ${Number(quantity.innerHTML.split(" ")[1]) - 1}`;
        })
    });
});