



const produit = document.getElementById("infosProduits");
var produitElt = localStorage.getItem("lenses")
var image = localStorage.getItem("logoElt")
console.log(produitElt)
var name = localStorage.getItem("name")
var price = localStorage.getItem("price")
var imageElt = document.getElementById("image")
imageElt.src = image;
produit.textContent = name +" "+ produitElt +" "+ price+"€";
