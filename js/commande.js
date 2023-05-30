const produit = document.getElementById("commande");
let produitElt = sessionStorage.getItem("cart")
const responseJS = JSON.parse(produitElt);

let price = sessionStorage.getItem("price")

function displayTotalPrice(){
   let cart = sessionStorage.getItem("cart");
   cart = JSON.parse(cart);
   const id = sessionStorage.getItem("orderId");
   let prix = 0;
   for (let i=0; i < cart.length; i++){
      prix = prix + cart[i].price * cart[i].qte;
   }
   produit.innerHTML = `<p> Nous vous remercions pour votre commande n°:
                           <li>${id}</li></p>
                        <p><em><b>Au total de: ${prix} €</b></em></p>
                        `
   sessionStorage.clear();
}
displayTotalPrice();



