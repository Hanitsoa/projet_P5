
let totalPrice = 0;
const item = document.getElementById("infosProduits");

let produitElt = sessionStorage.getItem("cart");
produitElt = JSON.parse(produitElt);
        
let div = document.createElement("div");
div.className = "designation";
item.appendChild(div);

let quantite = document.createElement("p");
quantite.textContent = "quantité";
div.appendChild(quantite);
let images = document.createElement("p");
images.textContent = "images";
div.appendChild(images);
let noms = document.createElement("p");
noms.textContent = "noms";
div.appendChild(noms);
let lenses = document.createElement("p");
lenses.textContent = "lenses";
div.appendChild(lenses);
let prix = document.createElement("p");
prix.textContent = "prix";
div.appendChild(prix);
let boutonRetour = document.createElement("p");
boutonRetour.textContent = "retour";
boutonRetour.className = "retour";
div.appendChild(boutonRetour);
boutonRetour.addEventListener("click", function(){
    window.history.back();
});

function afficher(produit, index){
    let div = document.createElement("div");
    div.className = "container";
    
    let quantite = document.createElement("p");
    quantite.textContent = produit.qte;
    quantite.classList.add("quantite");
    div.appendChild(quantite);

    let logoElt = document.createElement("img");
    logoElt.src = produit.img;
    div.appendChild(logoElt);
    
    let nameElt = document.createElement("p");
    nameElt.textContent = produit.name;
    div.appendChild(nameElt);

    let lensesElt = document.createElement("p");
    lensesElt.textContent = produit.lenses;
    div.appendChild(lensesElt);

    let priceElt = document.createElement("p");
    priceElt.textContent = produit.price * produit.qte+" "+"€";
    div.appendChild(priceElt);

    let supprime = document.createElement("button");
    supprime.textContent = "supprimer";
    supprime.className = "supprime"

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

const subtotal = document.querySelector(".subtotal");

const formValid = document.getElementById("bouton_envoi");
const mail = document.getElementById("courriel");
const missMail = document.getElementById("missMail");
const mailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]{2,3}$/
const missPrenom = document.getElementById("missPrenom");
const prenomValid = /^[A-Z][a-z]+([-A-Z][a-z]*)*$/
const missNom = document.getElementById("missNom");
const nomValid = /^[A-Z][a-z]+$/
const missAdresse = document.getElementById("missAdresse");
const adresseValid = /^[0-9]{1,4}[\s][a-zA-Z][a-z]+([\s][A-Za-z]*)*$/
const missVille = document.getElementById("missVille");
const villeValid = /^[A-Z][a-z]+$/
const missCodePostale = document.getElementById("missCodePostale");
const codePostaleValid = /^[0-9]{5}$/

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
                       
    if (validators.every((value) => value === true )){
        postOrder();
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
    cart = JSON.stringify(cart);
    sessionStorage.setItem("cart", cart)
    window.location.href = window.location.href;
}
function displayTotalPrice(){
    let cart = sessionStorage.getItem("cart");
    cart = JSON.parse(cart);
    let prix = 0;
    for (let i=0; i < cart.length; i++){
       prix = prix + cart[i].price * cart[i].qte;
    }
    const subtotal = document.querySelector(".subtotal");
    subtotal.textContent = "Total :"+" "+ prix +" "+"€";
}
function validerCommande(){
    let cart = sessionStorage.getItem("cart")
        cart = JSON.parse(cart);
        
        alert("Votre commande a bien prise en compte !");
        const item = document.getElementById("infosProduits");
        item.textContent = "Votre commande est bien enregistré !!!";
        nom.value="";
        prenom.value="";
        courriel.value="";
        adresse.value="";
        ville.value="";
        codePostale.value="";
        
        const subtotal = document.querySelector(".subtotal");
        subtotal.textContent ="";

        document.location.href="commande.html";
}
const formElt = document.querySelector('.form');

async function postOrder() {
    
    let cart = sessionStorage.getItem("cart")
    cart = JSON.parse(cart);
    let idCameras = [];  
    for (i=0; i<cart.length; i++){
        idCameras.push(cart[i].id);
    }
    const formData = new FormData(formElt);
    const data = Object.fromEntries(formData);
    const order = {
        contact: {
            firstName: prenom.value,
            lastName: nom.value,
            address: adresse.value,
            city: ville.value,
            email: courriel.value
        },
        products : idCameras
    }
    console.log(order);
    await fetch("http://localhost:3000/api/cameras/order", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    }).then(res => res.json()) 
      .then(data => {
        console.log(data)
        sessionStorage.setItem("orderId", data.orderId);
        validerCommande()
    })
      .catch(error => console.log(error))
}


