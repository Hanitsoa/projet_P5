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


var label = document.getElementsByTagName("label");
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
 
var inputElt = document.querySelector("input")
inputElt.addEventListener("click", function(e){
    e.preventDefault();
alert("ajout au panier");
localStorage.setItem("lenses", log.textContent);
}) 

    var logoElt = document.createElement("img");
    logoElt.src = camerasElt[0].imageUrl;
  
    orinocoElt.appendChild(logoElt) 
    var button = document.createElement("a");
    button.href = "produit.html";
    button.appendChild(logoElt);

    document.getElementById("produit").appendChild(button);
    var mainElt = document.getElementsByTagName("main");

    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = camerasElt[0].description;
    mainElt[0].appendChild(descriptionElt);

    
    var priceElt = document.createElement("p");
    priceElt.textContent = camerasElt[0].price +" "+"€";
    aside.appendChild(priceElt);

    var nameElt = document.createElement("p");
    nameElt.textContent = camerasElt[0].name;
    aside.appendChild(nameElt);


}