var orinocoElt = document.getElementById("cameras");


ajaxGet("http://localhost:3000/api/cameras", afficher);
    function afficher(reponse){
    var camerasElt = JSON.parse(reponse);
    console.log(camerasElt);

    var descriptionElt = document.createElement("p");
 
    for (var i = 0; i < camerasElt.length; i++){

    var logoElt = document.createElement("img");
    logoElt.src = camerasElt[i].imageUrl;
    // logoElt.style.height = "20%";
    // logoElt.style.width = "30%";
    orinocoElt.appendChild(logoElt) 
    var button = document.createElement("a");
    button.href = "produit.html?id=" +camerasElt[i]._id;

    button.appendChild(logoElt);
    document.getElementById("cameras").appendChild(button);

}
}
