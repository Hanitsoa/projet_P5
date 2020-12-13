function addItemToCart(item) {
    let cart = sessionStorage.getItem("cart")
    if (cart){
        cart = JSON.parse(cart);
        if (cart.some(elt => (elt.id === item.id) && (elt.lenses === item.lenses))){
            let index = cart.findIndex(elt => (elt.id === item.id) && (elt.lenses === item.lenses));
            cart[index].qte += 1;
            cart = JSON.stringify(cart)
            sessionStorage.setItem("cart", cart);
        }
        else {
            
            cart.push(item)
            cart = JSON.stringify(cart)
            sessionStorage.setItem("cart", cart)

        }
    } else {
        cart = JSON.stringify([item])
        sessionStorage.setItem("cart", cart)
    }
}
