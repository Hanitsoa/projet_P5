var couleur = sessionStorage.getItem("couleur");

 const localSt = document.getElementById("infosProduits");
 localSt.textContent = couleur;
 console.log(localSt.textContent)

//  let objLinea = localStorage.getItem("vert");
// let objJson = JSON.parse(couleur);
// // alert(objJson.age) // renvoie 30
// console.log(objJson)
// console.log(objLinea)


