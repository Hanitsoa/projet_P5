

let totalPrice = 0;
const item = document.getElementById("infosProduits");


let produitElt = sessionStorage.getItem("cart");
console.log(produitElt);
produitElt = JSON.parse(produitElt);
        console.log(produitElt);


function afficher(produit){
	
	var container = document.createElement("div");
	console.log(produit.name);
	console.log(produit.price);
	var logoElt = document.createElement("img");
    logoElt.src = produit.img;
    container.appendChild(logoElt);

    totalPrice += produit.price;
    
    var nameElt = document.createElement("p");
    nameElt.textContent = produit.name;
    container.appendChild(nameElt);

    var priceElt = document.createElement("p");
    priceElt.textContent = produit.price +" "+"€";
    container.appendChild(priceElt);

    item.appendChild(container);
}
produitElt.forEach( produit => afficher(produit ));

var total = document.createElement("p");
// var total = document.querySelector(".subtotal");
    total.textContent = "Sous total :"+" "+ totalPrice +" "+"€";
item.appendChild(total);

