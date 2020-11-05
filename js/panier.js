



const produit = document.getElementById("infosProduits");
var produitElt = localStorage.getItem("lenses")
var image = localStorage.getItem("logoElt")
console.log(produitElt)
var name = localStorage.getItem("name")
var price = localStorage.getItem("price")
produit.textContent = image +" "+ name +" "+ produitElt +" "+ price+"€";
