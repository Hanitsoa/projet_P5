function updateCart(item) {
    let cart = sessionStorage.getItem("cart")
    console.log(item);
    if (cart){
        cart = JSON.parse(cart);
        console.log(cart);
        if (cart.includes(item) === false){
            cart.push(item)
            cart = JSON.stringify(cart)
            console.log(cart);
            sessionStorage.setItem("cart", cart)
        }
    } else {
        cart = JSON.stringify([item])
        sessionStorage.setItem("cart", cart)
        console.log(cart);
    }
}

function addItemToCart(item) {
    let value = sessionStorage.getItem(item)
    if (value){
        value = parseInt(value) + 1
    } else {
        value = 1
    }
    sessionStorage.setItem(item, value)
    updateCart(item);
}