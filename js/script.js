var orinocoElt = document.getElementById("contenu");


async function displayCameras(){
  var camerasElt = await fetch("http://localhost:3000/api/cameras")
  camerasElt = await camerasElt.json();
  
  var descriptionElt = document.createElement("p");
    descriptionElt.textContent = "cameras";
    orinocoElt.appendChild(descriptionElt);
    var logoElt = document.createElement("img");
    logoElt.src = camerasElt[0].imageUrl;
    logoElt.style.height = "150px";
    logoElt.style.width = "200px";
    orinocoElt.appendChild(logoElt) 
    var button = document.createElement("a");
    button.href = "cameras.html";
    button.appendChild(logoElt);
    document.getElementById("contenu").appendChild(button);
}
displayCameras();

async function displayTeddies(){
    var teddiesElt = await fetch("http://localhost:3000/api/teddies")
    teddiesElt = await teddiesElt.json();
    
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = "teddies";
    orinocoElt.appendChild(descriptionElt);
    var logoElt = document.createElement("img");
    logoElt.src = teddiesElt[0].imageUrl;
    logoElt.style.height = "150px";
    logoElt.style.width = "200px";
    orinocoElt.appendChild(logoElt)
    var button = document.createElement("a");
    button.href = "http://www.google.fr";
    button.appendChild(logoElt);
    document.getElementById("contenu").appendChild(button);
}
displayTeddies();

async function displayFurniture(){
    var furnitureElt = await fetch("http://localhost:3000/api/furniture")
    furnitureElt = await furnitureElt.json();
    
    var descriptionElt = document.createElement("p");
    descriptionElt.classList.add("test")
    descriptionElt.textContent = "furniture";
    orinocoElt.appendChild(descriptionElt);
    var logoElt = document.createElement("img");
    logoElt.src = furnitureElt[0].imageUrl;
    logoElt.style.height = "150px";
    logoElt.style.width = "200px";
    orinocoElt.appendChild(logoElt)
    var button = document.createElement("a");
    button.href = "http://www.google.fr";
    button.appendChild(logoElt);
    document.getElementById("contenu").appendChild(button);
}
displayFurniture();
