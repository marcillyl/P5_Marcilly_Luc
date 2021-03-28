const vCam = ['http://localhost:3000/api/cameras']

function displayProductList (array) {
    for (let elem of array) {
        let productList = document.getElementById("productList");
        const productCard = document.createElement("a");
        const cardShade = document.createElement("div");
        const productName = document.createElement("h3");
        const productImg = document.createElement("img");
        productList.appendChild(productCard);
        productCard.appendChild(cardShade);
        cardShade.appendChild(productImg);
        productCard.appendChild(productName);
        cardShade.className = "shade";
        productCard.href = `product.html?productId=${elem._id}`;
        productName.innerHTML = `<span class="alt">Product _</span>${elem.name}`
        productImg.src = elem.imageUrl;
    }
}

async function accessApi () {
    const cameras = await fetch(vCam)
        .then((response) => response.json());
    displayProductList(cameras);
};

accessApi();