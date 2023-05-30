const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const orinocoElt = document.getElementById("produit");
console.log(window.location.search);
const sectionElt = document.getElementsByTagName("section");

let div = document.createElement('div');
div.className = 'infos';
sectionElt[0].appendChild(div);

let aside = document.createElement('aside');
aside.className = 'appareil';
div.appendChild(aside);

let article = document.createElement('article');
article.className = 'choix';
div.appendChild(article);

article.appendChild(photo);

const ajoutPanier = document.querySelector("input");
article.appendChild(ajoutPanier)

const retourProduit = document.querySelector("button")
article.appendChild(retourProduit)

let selectElt = document.createElement("select");

const select = document.querySelector("select");
const selectLentille = document.getElementById("selectLentille");
aside.appendChild(selectLentille);
select.addEventListener('change', updateValue);
function updateValue(e){
    selectLentille.textContent = e.target.value;
}

let url =  "http://localhost:3000/api/cameras/" + urlParams.get("id")
console.log(urlParams.get("id"));

async function afficher(){
    let camerasElt = await fetch(url)
    camerasElt = await camerasElt.json();
 
    for (let i=0; i<camerasElt.lenses.length; i++){
        let optionElts = document.createElement("option")
        let photo = document.getElementById("photo");
        optionElts.textContent = camerasElt.lenses[i];
        photo.appendChild(optionElts)
    }

    let logoElt = document.createElement("img");
    logoElt.src = camerasElt.imageUrl;
  
    orinocoElt.appendChild(logoElt) 
    let button = document.createElement("a");
    button.href = "#";
    button.appendChild(logoElt);
    document.getElementById("produit").appendChild(button);

    const mainElt = document.getElementsByTagName("main");

    let descriptionElt = document.createElement("p");
    descriptionElt.textContent = camerasElt.description;
    mainElt[0].appendChild(descriptionElt);

    let nameElt = document.createElement("p");
    nameElt.textContent = camerasElt.name;
    aside.appendChild(nameElt);

    let priceElt = document.createElement("p");
    priceElt.textContent = camerasElt.price +" "+"€";
    aside.appendChild(priceElt);

	const inputElt = document.querySelector("input")
	inputElt.addEventListener("click", function(){
	    let item = {
	        "name": camerasElt.name,
	        "lenses": selectLentille.textContent,
	        "img": camerasElt.imageUrl,
	        "price": camerasElt.price,
	        "id": camerasElt._id,
	        "qte": 1,
	    }
    addItemToCart(item);
    selectLentille.textContent = "Produit ajouté"
    });
};
afficher();
