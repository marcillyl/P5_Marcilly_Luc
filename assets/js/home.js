const vCam = ['http://localhost:3000/api/cameras']

function displayProductList (array) {
    for (let elem of array) {
        let productList = document.getElementById("productList");
        const productCard = document.createElement("a");
        const cardShade = document.createElement("div");
        const productName = document.createElement("h3");
        const productImg = document.createElement("img");
        const icon = document.createElement("i");
        productList.appendChild(productCard);
        productCard.appendChild(cardShade);
        cardShade.appendChild(productImg);
        productCard.appendChild(productName);
        productCard.appendChild(icon);
        icon.className = "fas fa-search";
        cardShade.className = "shade";
        productCard.href = `product.html?productId=${elem._id}`;
        productName.innerHTML = elem.name;
        productImg.src = elem.imageUrl;
    }
}

async function main () {
    const cameras = await fetch(vCam)
        .then((response) => response.json());
    displayProductList(cameras);
};

main();