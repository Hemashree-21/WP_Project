document.addEventListener("DOMContentLoaded", () => {
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");
    const body = document.body;

    // Mobile menu open
    menuOpenButton.addEventListener("click", () => {
        body.classList.add("show-mobile-menu");
        menuCloseButton.style.display = 'block';
    });

    // Mobile menu close
    menuCloseButton.addEventListener("click", () => {
        body.classList.remove("show-mobile-menu");
        menuCloseButton.style.display = 'none';
    });

    // Close menu on nav link click
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            body.classList.remove("show-mobile-menu");
            menuCloseButton.style.display = 'none';
        });
    });

    // Cart: Add to Cart function
    window.addToCart = function(name, price){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let item = cart.find(i => i.name === name);
        if(item) item.quantity++;
        else cart.push({name, price, quantity:1});
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(name + " added to cart!");
    }
});
