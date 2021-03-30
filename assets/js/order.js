const vCam = ['http://localhost:3000/api/cameras/'];
const orderInfo = document.getElementById('orderInfo');

// Affiche la confirmation de la commande.
async function orderStatus () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderId = urlParams.get('orderId');
    totalPrice = 0;

    // Calcul du prix total de la commande.
    for (let elem of Object.keys(localStorage)) {
        const produtData = await fetch(vCam + elem)
            .then ((response) => response.json());
        let productInCart = JSON.parse(localStorage[elem]);
        for (let i = 0; i < productInCart.length; i++) {
            totalPrice += (produtData.price * productInCart[i].quantity / 100);
        }
    }

    // Affiche le résumé de la commande (order_id + prix total) et vide le panier.
    let heading = document.createElement('h4');
    let price = document.createElement('h4');
    orderInfo.appendChild(heading);
    orderInfo.appendChild(price);
    heading.innerHTML = `Order ID : ${orderId}`;
    price.innerHTML = `Total price : ${totalPrice}€`;
    localStorage.clear();
};

orderStatus();