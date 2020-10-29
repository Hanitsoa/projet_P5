var orinocoElt = document.getElementById("contenu");


ajaxGet("http://localhost:3000/api/cameras", afficher);
    function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
    console.log(camerasElt);

       
    var logoElt = document.createElement("img");
    logoElt.src = camerasElt[0].imageUrl;
    logoElt.style.height = "40%";
    logoElt.style.width = "50%";
    orinocoElt.appendChild(logoElt) 
    var button = document.createElement("a");
    button.href = "panier.html";
    button.appendChild(logoElt);
    document.getElementById("contenu").appendChild(button);
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = camerasElt[0].description;
    orinocoElt.appendChild(descriptionElt);
    var lensesElt = document.createElement("p");
    lensesElt.textContent = camerasElt[0].lenses;
    orinocoElt.appendChild(lensesElt);
    var priceElt = document.createElement("p");
    priceElt.textContent = camerasElt[0].price +" "+"$";
    orinocoElt.appendChild(priceElt);
    var nameElt = document.createElement("p");
    nameElt.textContent = camerasElt[0].name;
    orinocoElt.appendChild(nameElt);
}

