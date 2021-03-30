// Modifie l'apparence de la barre de navigation en fonction de la page consultée.
function navBar () {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    if (page === "home.html") {
        let navLink = document.querySelector("nav :nth-child(1)");
        navLink.classList.add("active");
    }
    if (page === "cart.html") {
        let navLink = document.querySelector("nav :nth-child(2)");
        navLink.classList.add("active");
    }
    if (page === "checkout.html") {
        let navLink = document.querySelector("nav :nth-child(3)");
        navLink.classList.add("active");
    }

    // Désactive l'onglet Checkout si le panier est vide
    if (localStorage.length === 0 || page === "order.html") {
        let navLink = document.querySelector('nav :nth-child(3)');
        navLink.href = `#`;
        navLink.classList.add('disabled');
    }
}

navBar ();