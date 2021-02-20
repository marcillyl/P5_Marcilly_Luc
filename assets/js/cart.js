function lenseIncluded (products, lense) {
    for (let elem of products) {
        if (elem.lense === lense) {
            return true;
        }
    }
    return false;
}

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
};