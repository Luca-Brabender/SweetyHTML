import SweetyProduct from "./SweetyProduct.js";

const donut = new SweetyProduct(
    "Donut",
    "Zucker Pur!",
    3.20,
    "donuts.jpg"
);

const cheesecake = new SweetyProduct(
    "Cheesecake",
    "Cheesy cakes",
    4.50,
    "cheesecake.jpg"
);

const cupcakes = new SweetyProduct(
    "Cupcake",
    "Delicious",
    4.00,
    "donuts.jpg"
);

const arr = [donut, cheesecake, cupcakes];

arr.forEach((item) => {
    const content = `
        <div class="card">
            <img src="pics/${item.picture}" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${item.productName}</b></h4>
                <p>${item.productDescription}</p>
            </div>
        </div>
    `;
    document.getElementById("product_list").innerHTML += content;
});