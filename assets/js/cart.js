const vCam = ['http://localhost:3000/api/cameras/'];
const cartContainer = document.getElementById('cartContainer');
const total = document.getElementById('totalPrice');
let totalPrice = 0;

async function displayCart () {

    for (let elem of Object.keys(localStorage)) {

        const productData = await fetch(vCam + elem)
            .then ((response) => response.json());
        let productInCart = JSON.parse(localStorage[elem]);

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

            let productPrice = `${productData.price * productInCart[i].quantity / 100} €`
            let productLense = JSON.stringify(productInCart[i].lense);
            let quantity = productInCart[i].quantity;
            totalPrice += (productData.price * productInCart[i].quantity / 100);
            
            img.src = productData.imageUrl;
            name.innerHTML = productData.name;
            option.innerHTML = `${productLense} x ${quantity}`
            price.innerHTML = productPrice;
            total.innerHTML = `${totalPrice} €`
        }
    }
}

function clearCart () {
    localStorage.clear();
    location.reload();
}

displayCart();