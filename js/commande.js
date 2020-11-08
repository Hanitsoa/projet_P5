

var id = localStorage.getItem("id");
console.log(id)

const produit = document.getElementById("commande");
var produitElt = localStorage.getItem("id")
var price = localStorage.getItem("price")


produit.textContent = "Nous vous remercions pour votre commande"+" "+"n°"+" "+ produitElt + ", Au total de :" +" "+ price + "€";
