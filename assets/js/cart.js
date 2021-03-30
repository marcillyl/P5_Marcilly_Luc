const vCam = ['http://localhost:3000/api/cameras/'];
const cartContainer = document.getElementById('cartContainer');
const checkoutLink = document.getElementById('checkoutLink');
const checkoutButton = document.getElementById('checkoutButton');
const total = document.getElementById('totalPrice');
let totalPrice = 0;

// Affiche le contenu du panier.
async function displayCart () {

    // Si le panier est vide, affiche "Votre panier est vide" + prix total de 0€ + désactive le lien Checkout.
    if (localStorage.length === 0) {

        let empty = document.createElement('h3');
        cartContainer.appendChild(empty);
        empty.innerHTML = `Your cart is empty !`;
        total.innerHTML = `0€`;
        checkoutLink.classList.add('disabled');
        checkoutLink.href = `#`;
        checkoutButton.disabled = true;

    // Si le panier n'est pas vide, affiche son contenu et le prix total.
    } else {

        // Appel api pour chaque produit du panier.
        for (let elem of Object.keys(localStorage)) {

            const productData = await fetch(vCam + elem)
                .then ((response) => response.json());
            let productInCart = JSON.parse(localStorage[elem]);

            // Création et personnalisation des éléments html pour chaque produit du panier.
            for (let i = 0; i < productInCart.length; i++) {
                
                    let productPane = document.createElement('div');
                    let shade = document.createElement('div');
                    let name = document.createElement('h3');
                    let option = document.createElement('p');
                    let price = document.createElement('p');
                    let img = document.createElement('img');

                    productPane.classList.add('cartContainer-pane');
                    name.classList.add('cartContainer-pane__heading');
                    option.classList.add('cartContainer-pane__text');
                    price.classList.add('cartContainer-pane__price');
                    shade.classList.add('shade');

                    cartContainer.appendChild(productPane);
                    productPane.appendChild(shade);
                    shade.appendChild(img);
                    productPane.appendChild(name);
                    productPane.appendChild(option);
                    productPane.appendChild(price);

                // Calcul le prix de chaque produit en fonction de sa quantité + calcul le prix total.
                let productPrice = `${productData.price * productInCart[i].quantity / 100}€`
                let productLense = JSON.stringify(productInCart[i].lense);
                let quantity = productInCart[i].quantity;
                totalPrice += (productData.price * productInCart[i].quantity / 100);

                img.src = productData.imageUrl;
                name.innerHTML = productData.name;
                option.innerHTML = `${productLense} x ${quantity}`
                price.innerHTML = productPrice;
                total.innerHTML = `${totalPrice}€`
            }
        }
    }
}

// Vide le panier et recharge la page pour afficher le cas de figure "panier vide".
function clearCart () {
    localStorage.clear();
    location.reload();
}

displayCart();