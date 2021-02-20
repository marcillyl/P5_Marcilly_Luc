const vCam = ['http://localhost:3000/api/cameras']

function displayProductInfo (product) {
    let productLenses = product.lenses;
    const productImg = document.getElementById("productImg");
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");
    const productPrice = document.getElementById("productPrice");
    const selectLense = document.getElementById("selectLense");
    productImg.src = product.imageUrl;
    productName.innerHTML = product.name;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price;
    productPrice.innerHTML = `${product.price / 100} €`;
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