// MISE EN PLACE DES CAMERAS 

async function afficher(){
    await fetch("http://localhost:3000/api/cameras")
    	.then(
    		res => res.json()
    	)
      	.then(camerasElt => { 
      		let descriptionElt = document.createElement("div");
 
		    for (let i = 0; i < camerasElt.length; i++){
		    	let categorie = document.createElement("div");
		    	categorie.className = "categorie";

		    	let nameElt = document.createElement("p");
			    nameElt.className = "nameElt";
			    nameElt.textContent = camerasElt[i].name;
			    categorie.appendChild(nameElt);
		    	
			    let logoElt = document.createElement("img");
			    logoElt.src = camerasElt[i].imageUrl;
			    
			    let button = document.createElement("a");
			    button.href = "produit.html?id=" +camerasElt[i]._id;

			    button.appendChild(logoElt);
			    categorie.appendChild(button);

			    let priceElt = document.createElement("p");
			    priceElt.className = "priceElt";
			    priceElt.textContent = camerasElt[i].price +" " + "€";
			    categorie.appendChild(priceElt);

			    document.getElementById("cameras").appendChild(categorie);
			}
        
    	})
    	.catch(error => console.log(error))
}
afficher();
