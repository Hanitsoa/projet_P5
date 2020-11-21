

let totalPrice = 0;
const item = document.getElementById("infosProduits");


let produitElt = sessionStorage.getItem("cart");
console.log(produitElt);
produitElt = JSON.parse(produitElt);
        console.log(produitElt);
var div = document.createElement("div");
div.className = "designation";
item.appendChild(div);

var images = document.createElement("p");
images.textContent = "images";
div.appendChild(images);
var noms = document.createElement("p");
noms.textContent = "noms";
div.appendChild(noms);
var lenses = document.createElement("p");
lenses.textContent = "lenses";
div.appendChild(lenses);
var prix = document.createElement("p");
prix.textContent = "prix";
div.appendChild(prix);

function afficher(produit){
	
	var div = document.createElement("div");
    div.className = "container";
	console.log(produit.name);
	console.log(produit.price);
	var logoElt = document.createElement("img");
    logoElt.src = produit.img;
    div.appendChild(logoElt);

    totalPrice += produit.price;
    
    var nameElt = document.createElement("p");
    nameElt.textContent = produit.name;
    div.appendChild(nameElt);

    var lensesElt = document.createElement("p");
    lensesElt.textContent = produit.lenses;
    div.appendChild(lensesElt);

    var priceElt = document.createElement("p");
    priceElt.textContent = produit.price +" "+"€";
    div.appendChild(priceElt);

    item.appendChild(div);
}
produitElt.forEach( produit => afficher(produit ));

var total = document.createElement("p");
// var total = document.querySelector(".subtotal");
    total.textContent = "Sous total :"+" "+ totalPrice +" "+"€";
item.appendChild(total);

