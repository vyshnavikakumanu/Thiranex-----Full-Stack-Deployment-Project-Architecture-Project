const products = [
{
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "images/laptop.jpeg"
},
{
    id: 2,
    name: "Phone",
    price: 20000,
    image: "images/phone.jpeg"
},
{
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "images/headphones.jpeg"
}
];

const productsDiv = document.getElementById("products");

function displayProducts(items) {
    productsDiv.innerHTML = "";

    items.forEach(product => {
        productsDiv.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");
}

displayProducts(products);

document.getElementById("search").addEventListener("input", (e) => {
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(
            e.target.value.toLowerCase()
        )
    );

    displayProducts(filtered);
});