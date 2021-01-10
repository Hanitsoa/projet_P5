

var id = localStorage.getItem("id");
console.log(id)

const produit = document.getElementById("commande");
var produitElt = sessionStorage.getItem("id")
var price = sessionStorage.getItem("price")



produit.textContent ="Nous vous remercions pour votre commande:"+" "+"n°"+" "+ produitElt + ", Au total de :" +" "+ price + "€";
