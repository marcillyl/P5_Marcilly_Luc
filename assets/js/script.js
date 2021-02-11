const vCam = [{"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg"},{"lenses":["50mm 1.8","60mm 2.8","24-60mm 2.8/4.5"],"_id":"5be1ef211c9d44000030b062","name":"Hirsch 400DTS","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":309900,"imageUrl":"http://localhost:3000/images/vcam_2.jpg"},{"lenses":["25mm 4.5"],"_id":"5be9bc241c9d440000a730e7","name":"Franck JS 105","price":209900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_3.jpg"},{"lenses":["50mm 1.7","35mm 1.4"],"_id":"5be9c4471c9d440000a730e8","name":"Kuros TTS","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":159900,"imageUrl":"http://localhost:3000/images/vcam_4.jpg"},{"lenses":["50mm 1.4","35mm 1.8","28-200mm 2.8/4.5"],"_id":"5be9c4c71c9d440000a730e9","name":"Katatone","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":59900,"imageUrl":"http://localhost:3000/images/vcam_5.jpg"}];

function displayProductList(array) {
    for (let elem of array) {
        let productList = document.getElementById("productList");
        const productCard = document.createElement("a");
        const cardShade = document.createElement("div");
        const productName = document.createElement("h3");
        const productImage = document.createElement("img");
        productList.appendChild(productCard);
        productCard.appendChild(cardShade);
        cardShade.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.href = `product.html?productId=${elem._id}`;
        cardShade.className = "shade";
        productName.innerHTML = `${elem.name}`;
        productImage.src = elem.imageUrl;
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("productId");
const product = vCam.find(elem => elem._id === productId);

function displayProductInfo() {
    let productBox = document.getElementById("productBox");
    const productImage = document.createElement("img");
    const productData = document.createElement("div");
    const productName = document.createElement("h3");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("h4");
    productBox.appendChild(productImage);
    productBox.appendChild(productData);
    productData.appendChild(productName);
    productData.appendChild(productDescription);
    productData.appendChild(productPrice);
    productData.className = "productBox-data";
    productImage.src = product.imageUrl;
    productName.innerHTML = product.name;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = `${product.price / 100} €`;
}

function main () {
    let page = document.getElementById("page");
    if (page.textContent === "Home") {
        displayProductList(vCam);
    }
    if (page.textContent === "Product") {
        displayProductInfo(product);
    }
};

main();