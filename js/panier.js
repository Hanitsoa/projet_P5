



const produit = document.getElementById("infosProduits");
var produitElt = localStorage.getItem("lenses")
var image = localStorage.getItem("logoElt")
console.log(produitElt)
var name = localStorage.getItem("name")
var price = localStorage.getItem("price")
var imageElt = document.getElementById("image")
imageElt.src = image;
produit.textContent = name +" "+ produitElt +" "+ price+"€";

var inputElt = document.querySelector("input")
inputElt.addEventListener("click", function(e){
    e.preventDefault()
localStorage.setItem("prix", camerasElt.price)
console.log(camerasElt.price)
}) 


