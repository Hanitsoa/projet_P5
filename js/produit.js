var orinocoElt = document.getElementById("produit");

const sectionElt = document.getElementsByTagName("section");
console.log(sectionElt[0])

const div = document.createElement('div');
div.className = 'infos';
console.log(div)
sectionElt[0].appendChild(div);

const aside = document.createElement('aside');
aside.className = 'appareil';
console.log(aside)
div.appendChild(aside);

const article = document.createElement('article');
article.className = 'choix';
div.appendChild(article);


var lentille = document.getElementById("photo")
console.log("lentille")
article.appendChild(lentille)
var label = document.getElementsByTagName("label")
console.log(label[0])
var ajoutP = document.getElementsByTagName("input")
article.appendChild(ajoutP[0])


var selectElt = document.createElement("select");
console.log(selectElt)


ajaxGet("http://localhost:3000/api/cameras", afficher);
    function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
    console.log(camerasElt);

       
    var logoElt = document.createElement("img");
    logoElt.src = camerasElt[0].imageUrl;
  
    orinocoElt.appendChild(logoElt) 
    var button = document.createElement("a");
    button.href = "produit.html";
    button.appendChild(logoElt);

    document.getElementById("produit").appendChild(button);
    var mainElt = document.getElementsByTagName("main");
console.log(mainElt[0])

    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = camerasElt[0].description;
    mainElt[0].appendChild(descriptionElt);

    var lensesElt = document.createElement("p");
    lensesElt.textContent = camerasElt[0].lenses;
    // orinocoElt.appendChild(lensesElt);
    aside.appendChild(lensesElt);

    var priceElt = document.createElement("p");
    priceElt.textContent = camerasElt[0].price +" "+"$";
    // orinocoElt.appendChild(priceElt);
    aside.appendChild(priceElt);

    var nameElt = document.createElement("p");
    nameElt.textContent = camerasElt[0].name;
    // orinocoElt.appendChild(nameElt);
    aside.appendChild(nameElt);
}

