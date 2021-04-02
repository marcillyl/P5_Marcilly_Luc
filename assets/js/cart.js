const vCam = ['http://localhost:3000/api/cameras/'];
const cartContainer = document.getElementById('cartContainer');
const checkoutButton = document.getElementById('checkoutButton');
const total = document.getElementById('totalPrice');
let totalPrice = 0;

// Calcul et affiche le prix total du panier.
function getTotalPrice (productInCart, productData) {
    for (let i = 0; i < productInCart.length; i++) {
        totalPrice += (productData.price * productInCart[i].quantity / 100);
        total.innerHTML = `${totalPrice}€`;
    }
}

function createPane (productInCart, productData) {
    for (let i = 0; i < productInCart.length; i++) {
        // Création des éléments html pour chaque produit du panier.
        let productPane = document.createElement('div');
        let name = document.createElement('h3');
        let option = document.createElement('p');
        let price = document.createElement('p');
        let img = document.createElement('img');
        productPane.classList.add('cartContainer-pane');
        img.classList.add('shade')
        name.classList.add('cartContainer-pane__heading');
        option.classList.add('cartContainer-pane__text');
        price.classList.add('cartContainer-pane__price');
        cartContainer.appendChild(productPane);
        productPane.appendChild(img);
        productPane.appendChild(name);
        productPane.appendChild(option);
        productPane.appendChild(price);

        // Personnalisation des éléments html pour chaque produit du panier.
        img.src = productData.imageUrl;
        name.innerHTML = productData.name;
        option.innerHTML = `${JSON.stringify(productInCart[i].lense)} x ${productInCart[i].quantity}`
        price.innerHTML = `${productData.price * productInCart[i].quantity / 100}€`;
    }
}

async function displayCart() {
    // Appel api pour chaque produit du panier.
    for (let elem of Object.keys(localStorage)) {
        const productData = await fetch(vCam + elem) .then ((response) => response.json());
        let productInCart = JSON.parse(localStorage[elem]);
        getTotalPrice(productInCart, productData);
        createPane(productInCart, productData);
    }
}

// Vérifie le contenu du panier.
function checkCart () {
    // Si le panier est vide, affiche "Votre panier est vide" + prix total de 0€ + désactive le lien Checkout.
    if (localStorage.length === 0) {
        let empty = document.createElement('h3');
        cartContainer.appendChild(empty);
        empty.innerHTML = `Your cart is empty !`;
        total.innerHTML = `0€`;
        checkoutButton.classList.add('disabled');
        checkoutButton.disabled = true;

    // Si le panier n'est pas vide, affiche son contenu et le prix total.
    } else {
        displayCart();
    }
}

// Vide le panier et recharge la page pour afficher le cas de figure "panier vide".
function clearCart () {
    localStorage.clear();
    location.reload();
}

checkCart();