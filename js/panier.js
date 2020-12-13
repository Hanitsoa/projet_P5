
let totalPrice = 0;
const item = document.getElementById("infosProduits");

let produitElt = sessionStorage.getItem("cart");
produitElt = JSON.parse(produitElt);
        
var div = document.createElement("div");
div.className = "designation";
item.appendChild(div);

var quantite = document.createElement("p");
quantite.textContent = "quantité";
div.appendChild(quantite);

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

var a = document.createElement("a");
a.textContent = " Retour Produits ";
a.href = "cameras.html";
div.appendChild(a);

function afficher(produit, index){

    var div = document.createElement("div");
    div.className = "container";
    console.log(produit.name);
    console.log(produit.price);
    console.log(produit);
    console.log(produitElt);
    console.log(produit.qte);

    var quantite = document.createElement("p");
    quantite.textContent = produit.qte;
    quantite.classList.add("quantite");
    div.appendChild(quantite);

    var logoElt = document.createElement("img");
    logoElt.src = produit.img;
    div.appendChild(logoElt);
    
    var nameElt = document.createElement("p");
    nameElt.textContent = produit.name;
    div.appendChild(nameElt);

    var lensesElt = document.createElement("p");
    lensesElt.textContent = produit.lenses;
    div.appendChild(lensesElt);

    var priceElt = document.createElement("p");
    priceElt.textContent = produit.price +" "+"€";
    div.appendChild(priceElt);

    var supprime = document.createElement("button");
    supprime.textContent = "supprimer";

    supprime.setAttribute("data-index", index);
    console.log(supprime);
    div.appendChild(supprime);

    supprime.addEventListener("click", function(e){
        supprimer(e);
        displayTotalPrice();
       });
    item.appendChild(div);
}

produitElt.forEach( (produit, index) => afficher(produit, index));
displayTotalPrice()

var subtotal = document.querySelector(".subtotal");

var valide = document.querySelector("#commande");

valide.addEventListener("click", valider);
function valider(){
    sessionStorage.removeItem("cart");
}

function supprimer(event){
    console.log(event.target.dataset.index);
   
    let cart = sessionStorage.getItem("cart")
    cart = JSON.parse(cart);
    productHtml = event.target.parentNode;
    product = cart[event.target.dataset.index]
    if (product.qte > 1){
        product.qte -= 1;
        productHtml.getElementsByClassName("quantite")[0].textContent = product.qte;
    } else {
        cart.splice(event.target.dataset.index,1);
        productHtml.remove();
    }
    console.log(cart);//apres suppression

    cart = JSON.stringify(cart);
    sessionStorage.setItem("cart", cart)
}
function displayTotalPrice(){
    let cart = sessionStorage.getItem("cart");
    cart = JSON.parse(cart);
    var prix = 0;
    for (var i=0; i < cart.length; i++){
       prix = prix + cart[i].price * cart[i].qte;
    }
    var subtotal = document.querySelector(".subtotal");
    subtotal.textContent = "Total :"+" "+ prix +" "+"€";
}

