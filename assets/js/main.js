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
    if (localStorage.length === 0) {
        let navLink = document.querySelector('nav :nth-child(3)');
        navLink.href = `#`;
        navLink.classList.add('disabled');
    }
}

navBar ();