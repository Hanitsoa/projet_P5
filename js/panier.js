
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

var formValid = document.getElementById("bouton_envoi");
var mail = document.getElementById("courriel");
var missMail = document.getElementById("missMail");
var mailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]{2,3}$/
var missPrenom = document.getElementById("missPrenom");
var prenomValid = /^[A-Z][a-z]+([-A-Z][a-z]*)*$/
var missNom = document.getElementById("missNom");
var nomValid = /^[A-Z][a-z]+$/
var missAdresse = document.getElementById("missAdresse");
var adresseValid = /^[0-9]{1,4}[\s][a-zA-Z][a-z]+([\s][A-Za-z]*)*$/
var missVille = document.getElementById("missVille");
var villeValid = /^[A-Z][a-z]+$/
var missCodePostale = document.getElementById("missCodePostale");
var codePostaleValid = /^[0-9]{5}$/

            // [miniscule Majuscule 0à9 ._-]
            // + veut dire peuvent repeter autant de fois
            // \ pour dire au serveur que c'est un caractere (ici point)
            // /^ debut d'un regex,3}
            // $/ la fin d'un regex

formValid.addEventListener("click", function(event){
    let validators = [] 
    validators.push(validationMail(event));
    validators.push(validationPrenom(event));
    validators.push(validationNom(event));
    validators.push(validationAdresse(event));
    validators.push( validationVille(event));
    validators.push(validationCodePostale(event));
    console.log(validators);
                       
    if (validators.every((value) => value === true )) {
        passerCommande();
    }        
});

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

function validationMail(event){
    event.preventDefault();
    if (courriel.validity.valueMissing){
        missMail.textContent = "Mail manquant";
        return false;
    } else if (mailValid.test(courriel.value) == false){
        missMail.textContent = "Format incorrect";
        return false;
    } else {
        missMail.textContent = "";
    }
    return true;
}
function validationNom(event){
    event.preventDefault();
    if (nom.validity.valueMissing){
        event.preventDefault();
        missNom.textContent = "Nom manquant";
        return false;
    } else if (nomValid.test(nom.value) == false){
        event.preventDefault();
        missNom.textContent = "Format incorrect";
        return false;
    } else {
            missNom.textContent = "";
        }
    return true;
}
function validationPrenom(event){
    event.preventDefault();
    if (prenom.validity.valueMissing){
        event.preventDefault();
        missPrenom.textContent = "Prénom manquant";
        return false;
    } else if (prenomValid.test(prenom.value) == false){
        event.preventDefault();
        missPrenom.textContent = "Format incorrect";
        return false;
    } else {
            missPrenom.textContent = "";
        }
    return true;
}
function validationAdresse(event){
    event.preventDefault();
    if (adresse.validity.valueMissing){
        event.preventDefault();
        missAdresse.textContent = "adresse manquant";
        return false;
    console.log(missAdresse.textContent);
    } else if (adresseValid.test(adresse.value) == false){
        event.preventDefault();
        missAdresse.textContent = "Format incorrect";
        return false;
    } else {
        missAdresse.textContent = "";
        }
    return true;
}
function validationVille(event){
    event.preventDefault();
    if (ville.validity.valueMissing){
        event.preventDefault();
        missVille.textContent = "Ville manquant";
        return false;
    console.log(missVille.textContent);
    } else if (villeValid.test(ville.value) == false){
        event.preventDefault();
        missVille.textContent = "Format incorrect";
        return false;
    } else {
        missVille.textContent = "";
        }
    return true;
}
function validationCodePostale(event){
    event.preventDefault();
    if (codePostale.validity.valueMissing){
        event.preventDefault();
        missCodePostale.textContent = "Code postale manquant";
        return false;
    console.log(missCodePostale.textContent);
    } else if (codePostaleValid.test(codePostale.value) == false){
        event.preventDefault();
        missCodePostale.textContent = "Format incorrect";
        return false;
    } else {
            
        }
    return true;
}
function passerCommande(){
    let cart = sessionStorage.getItem("cart")
        cart = JSON.parse(cart);
        missCodePostale.textContent = "";
        alert("Votre commande a bien prise en compte !");
        sessionStorage.clear();
        nom.value="";
        prenom.value="";
        courriel.value="";
        adresse.value="";
        ville.value="";
        codePostale.value="";
        var acheter = document.querySelector(".container");
        acheter.textContent="";
        
        var subtotal = document.querySelector(".subtotal");
        subtotal.textContent ="";

    console.log("bravo");
}
let order = {
    contact: {
        firstName: "test1",
        lastName: "test2",
        address: "test3",
        city: "test4",
        email: "test5"
    },
    product:["idtest1", "idtest2", "idtest3", "idtest4", "idtest5"]
}
