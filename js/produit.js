const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var orinocoElt = document.getElementById("produit");
console.log(window.location.search)
console.log(urlParams);
const sectionElt = document.getElementsByTagName("section");
console.log(sectionElt[0])

const div = document.createElement('div');
div.className = 'infos';
sectionElt[0].appendChild(div);

const aside = document.createElement('aside');
aside.className = 'appareil';
div.appendChild(aside);

const article = document.createElement('article');
article.className = 'choix';
div.appendChild(article);

var label = document.getElementsByTagName("label");
article.appendChild(photo)

var ajoutPanier = document.querySelector("input");
article.appendChild(ajoutPanier)

var retourProduit = document.querySelector("button")
article.appendChild(retourProduit)

var selectElt = document.createElement("select");

const select = document.querySelector("select");
const log = document.getElementById("log");
aside.appendChild(log);
select.addEventListener('change', updateValue);
function updateValue(e) {
    log.textContent = e.target.value;
}

const url =  "http://localhost:3000/api/cameras/" + urlParams.get("id")
console.log(urlParams.get("id"));
ajaxGet(url, afficher);
function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
 
    for (var i=0; i<camerasElt.lenses.length; i++){
        var optionElts = document.createElement("option")
        let photo = document.getElementById("photo");
        optionElts.textContent = camerasElt.lenses[i];
        photo.appendChild(optionElts)
    }
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

console.log(camerasElt._id);

	var inputElt = document.querySelector("input")
	inputElt.addEventListener("click", function(){
	    let item = {
	        "name": camerasElt.name,
	        "lenses": log.textContent,
	        "img": camerasElt.imageUrl,
	        "price": camerasElt.price,
	        "id": camerasElt._id,
	        "qte": 1,
	    }
    addItemToCart(item);
    alert("Produit ajouté aux panier");
	});
};


