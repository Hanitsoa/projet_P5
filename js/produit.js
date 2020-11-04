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


// var lentille = document.getElementById("photo")
// console.log("lentille")
// article.appendChild(lentille)
var label = document.getElementsByTagName("label");
// var log = document.getElementById("log");
console.log(label)
article.appendChild(photo)

var ajoutPanier = document.querySelector("input");
article.appendChild(ajoutPanier)

var selectElt = document.createElement("select");
console.log(selectElt)

const select = document.querySelector("select");
const log = document.getElementById("log");
aside.appendChild(log);
select.addEventListener('change', updateValue);
function updateValue(e) {
    log.textContent = e.target.value;
}

objectif=log.textContent;

// let objJson = {
//     prenom : "dany",
//     age : 30,
//     taille : 170
// }
// let objJson = log.textContent;
// let objLinea = JSON.stringify(objJson);
// localStorage.setItem("obj",objLinea);


sessionStorage.setItem("lentille", "vert")

var couleur = sessionStorage.getItem("lentille");
console.log(couleur)

const produit = document.getElementById("produit")
produit.textContent = couleur;
console.log(couleur)





ajaxGet("http://localhost:3000/api/cameras", afficher);
    function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
    console.log(camerasElt);

 
for (var i=0; i<camerasElt[0].lenses.length; i++){
    var optionElts = document.createElement("option")
    let photo = document.getElementById("photo");
    optionElts.textContent = camerasElt[0].lenses[i];
    photo.appendChild(optionElts)
}
 


localStorage.setItem("lentille", camerasElt[0].lenses);
var objectif = localStorage.getItem("lentille")
console.log(objectif)



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

    // var lensesElt = document.createElement("p");
    // lensesElt.textContent = camerasElt[0].lenses;
    // // orinocoElt.appendChild(lensesElt);
    // aside.appendChild(lensesElt);

    var priceElt = document.createElement("p");
    priceElt.textContent = camerasElt[0].price +" "+"$";
    // orinocoElt.appendChild(priceElt);
    aside.appendChild(priceElt);

    var nameElt = document.createElement("p");
    nameElt.textContent = camerasElt[0].name;
    // orinocoElt.appendChild(nameElt);
    aside.appendChild(nameElt);

    
}


