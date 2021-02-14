const vCam = ['http://localhost:3000/api/cameras']

function displayProductInfo (product) {
    let productOptions = product.lenses;
    const productImg = document.getElementById("productImg");
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");
    const productPrice = document.getElementById("productPrice");
    const selectOption = document.getElementById("selectOption");
    productImg.src = product.imageUrl;
    productName.innerHTML = product.name;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price;
    productPrice.innerHTML = `${product.price / 100} €`;
    for (let i = 0; i < productOptions.length; i++) {
        let opt = productOptions[i];
        let elt = document.createElement("option");
        elt.textContent = opt;
        elt.value = opt;
        selectOption.appendChild(elt);
    }
    selectOption.addEventListener("change", (event) => {
        return chosenOption = event.target.value;
    });
}

async function main () {
    const cameras = await fetch(vCam)
        .then ((response) => response.json());
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("productId");
    const product = cameras.find(elem => elem._id === productId);
    displayProductInfo(product);
};

main();