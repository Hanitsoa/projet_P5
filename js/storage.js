function addItemToCart(item) {
    let cart = sessionStorage.getItem("cart")
    if (cart){
        cart = JSON.parse(cart); //on change JSON pour pouvoir W avec
        if (cart.some(elt => (elt.id === item.id) && (elt.lenses === item.lenses))){ //Au moins 1 ok
            let index = cart.findIndex(elt => (elt.id === item.id) && (elt.lenses === item.lenses)); //trouver
            // le bon endroit (index) ou c ok
            cart[index].qte += 1;
            cart = JSON.stringify(cart)
            sessionStorage.setItem("cart", cart); //on recharge le sessionStorage
        }
        else {
            cart.push(item)
            cart = JSON.stringify(cart)
            sessionStorage.setItem("cart", cart)
        }
    } else {
        cart = JSON.stringify([item]) //on change en chaine de caractere pour le sessioStorage
        sessionStorage.setItem("cart", cart)
    }
}
