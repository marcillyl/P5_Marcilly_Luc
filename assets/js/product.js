const vCam = ['http://localhost:3000/api/cameras/']
const productImg = document.getElementById("productImg");
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const selectLense = document.getElementById("selectLense");

function displayProductInfo (product) {
    let productLenses = product.lenses;
    productImg.src = product.imageUrl;
    productName.innerHTML = product.name;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price;
    productPrice.innerHTML = `${product.price / 100}€`;

    for (let i = 0; i < productLenses.length; i++) {
        let opt = productLenses[i];
        let elt = document.createElement("option");
        elt.textContent = opt;
        elt.value = opt;
        selectLense.appendChild(elt);
    }

    selectLense.addEventListener("change", (event) => {
        return chosenLense = event.target.value;
    });
    return chosenLense = selectLense.value;
};

function lenseIncluded (products, lense) {
    for (let elem of products) {
        if (elem.lense === lense) {
            return true;
        }
    }
    return false;
};

function addToCart () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("productId");
    products = JSON.parse(localStorage.getItem(productId));
    if (products === null) {
        let cart = [];
        let product = {
            lense : chosenLense,
            quantity : 1
        }
        cart.push(product);
        localStorage.setItem(productId, JSON.stringify(cart));
    } else {
        if (lenseIncluded(products, chosenLense) === true) {
            for (let elem of products) {
                if (elem.lense == chosenLense) {
                    elem.quantity++;
                }
            }
        } else {
            let product = {
                lense : chosenLense,
                quantity : 1
            }
            products.push(product);
        }
        localStorage.setItem(productId, JSON.stringify(products));
    }
    let navLink = document.querySelector('nav :nth-child(3)');
    navLink.href = `checkout.html`;
    navLink.classList.remove('disabled');
};

async function main () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("productId");
    const product = await fetch(vCam + productId)
        .then((response) => response.json());
    displayProductInfo(product);
};

main();