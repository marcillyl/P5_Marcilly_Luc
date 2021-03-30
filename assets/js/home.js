const vCam = ['http://localhost:3000/api/cameras']
const productList = document.getElementById("productList");

// Crée une carte produit pour chaque objet.
function displayProductList (array) {
    
    for (let elem of array) {
        
        // Crée les éléments html de la carte produit.
        const productCard = document.createElement("a");
        const cardShade = document.createElement("div");
        const productName = document.createElement("h3");
        const productImg = document.createElement("img");

        productList.appendChild(productCard);
        productCard.appendChild(cardShade);
        cardShade.appendChild(productImg);
        productCard.appendChild(productName);
        
        // Personnalise les éléments de la carte produit avec les infos de chaque objet.
        cardShade.className = "shade";
        productCard.href = `product.html?productId=${elem._id}`;
        productName.innerHTML = `<span class="alt">Product _</span>${elem.name}`
        productImg.src = elem.imageUrl;

    }
}

// Appel api.
async function main () {
    const cameras = await fetch(vCam)
        .then((response) => response.json());
    displayProductList(cameras);
};

main();