var orinocoElt = document.getElementById("contenu");

{
ajaxGet("http://localhost:3000/api/cameras", afficher);
    function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
    console.log(camerasElt);
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
}
{
ajaxGet("http://localhost:3000/api/teddies", afficher);
    function afficher(reponse){
    var teddiesElt = JSON.parse(reponse);
    console.log(teddiesElt);
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
}
{
ajaxGet("http://localhost:3000/api/furniture", afficher);
    function afficher(reponse){
    var furnitureElt = JSON.parse(reponse);
    console.log(furnitureElt);
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
}

  const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]