const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)
console.log(window.location)

var orinocoElt = document.getElementById("produit");
console.log(window.location.search)

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

const url =  "http://localhost:3000/api/cameras/" + urlParams.get("id")
console.log(url)

ajaxGet(url, afficher);
    function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
    console.log(camerasElt);

 
for (var i=0; i<camerasElt.lenses.length; i++){
    var optionElts = document.createElement("option")
    let photo = document.getElementById("photo");
    optionElts.textContent = camerasElt.lenses[i];
    photo.appendChild(optionElts)
}
 
var inputElt = document.querySelector("input")
inputElt.addEventListener("click", function(e){
    e.preventDefault();
alert("ajout au panier");
localStorage.setItem("lenses", log.textContent);
logoElt.src = camerasElt.imageUrl;
localStorage.setItem("logoElt", logoElt.src);
localStorage.setItem("name", camerasElt.name)
localStorage.setItem("price", camerasElt.price)
}) 

    var logoElt = document.createElement("img");
    logoElt.src = camerasElt.imageUrl;
  
    orinocoElt.appendChild(logoElt) 
    var button = document.createElement("a");
    button.href = "produit.html";
    button.appendChild(logoElt);

    document.getElementById("produit").appendChild(button);
    var mainElt = document.getElementsByTagName("main");

    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = camerasElt.description;
    mainElt[0].appendChild(descriptionElt);

    
    var priceElt = document.createElement("p");
    priceElt.textContent = camerasElt.price +" "+"€";
    aside.appendChild(priceElt);

    var nameElt = document.createElement("p");
    nameElt.textContent = camerasElt.name;
    aside.appendChild(nameElt);


}

// panier = [
// {
//         id: "flgkdsgfhlkdfghldfkgjh",
//         details: "lense 1",
//     },
//     {
//         id: "flgkdsgfggjh",
//         details: "lense B",
//     },
// ]
