const vCam = ['http://localhost:3000/api/cameras/']
const productImg = document.getElementById("productImg");
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const selectLense = document.getElementById("selectLense");

function displayProductInfo (product) {
    
    // Personnalise la page produit avec les informations de l'objet.
    let productLenses = product.lenses;
    productImg.src = product.imageUrl;
    productName.innerHTML = product.name;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price;
    productPrice.innerHTML = `${product.price / 100}€`;
    
    // Personnalise le menu de sélection de l'option.
    for (let i = 0; i < productLenses.length; i++) {
        let opt = productLenses[i];
        let elt = document.createElement("option");
        elt.textContent = opt;
        elt.value = opt;
        selectLense.appendChild(elt);
    }
    
    // Récupère l'option sélectionnée par l'utilisateur.
    selectLense.addEventListener("change", (event) => {
        return chosenLense = event.target.value;
    });
    return chosenLense = selectLense.value;
};

// Vérifie si l'option sélectionnée est présente dans le panier.
function lenseIncluded (products, lense) {
    for (let elem of products) {
        if (elem.lense === lense) {
            return true;
        }
    }
    return false;
};

// Ajoute l'objet au panier.
function addToCart () {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("productId");
    products = JSON.parse(localStorage.getItem(productId));

    // Si le local storage ne contient pas de panier, crée un panier et ajoute l'objet.
    if (products === null) {
        let cart = [];
        let product = {
            lense : chosenLense,
            quantity : 1
        }
        cart.push(product);
        localStorage.setItem(productId, JSON.stringify(cart));

    } else {

        // Si l'objet ET l'option sélectionnée sont présents : augmente sa quantité de 1.
        if (lenseIncluded(products, chosenLense) === true) {
            for (let elem of products) {
                if (elem.lense == chosenLense) {
                    elem.quantity++;
                }
            }

        // Si l'objet est présent MAIS pas dans l'option sélectionnée : ajoute cette version au panier.
        } else {
            let product = {
                lense : chosenLense,
                quantity : 1
            }
            products.push(product);
        }
        localStorage.setItem(productId, JSON.stringify(products));
    }

    // Active l'onglet Checkout.
    let navLink = document.querySelector('nav :nth-child(3)');
    navLink.href = `checkout.html`;
    navLink.classList.remove('disabled');
};

// Récupère l'id du produit dans l'url et l'utilise pour accéder à l'objet dans l'api.
async function main () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("productId");
    const product = await fetch(vCam + productId)
        .then((response) => response.json());
    displayProductInfo(product);
};

main();