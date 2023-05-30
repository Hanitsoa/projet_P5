function validationMail(event){
    event.preventDefault();
    if (courriel.validity.valueMissing){
        missMail.textContent = "Mail manquant";
        missMail.className = "manquant";
        return false;
    } else if (mailValid.test(courriel.value) == false){
        missMail.textContent = "Format incorrect";
        return false;
    } else {
        missMail.textContent = "";
    }
    return true;
}
function validationNom(event){
    event.preventDefault();
    if (nom.validity.valueMissing){
        event.preventDefault();
        missNom.textContent = "Nom manquant";
        return false;
    } else if (nomValid.test(nom.value) == false){
        event.preventDefault();
        missNom.textContent = "Format incorrect";
        return false;
    } else {
            missNom.textContent = "";
        }
    return true;
}
function validationPrenom(event){
    event.preventDefault();
    if (prenom.validity.valueMissing){
        event.preventDefault();
        missPrenom.textContent = "Prénom manquant";
        return false;
    } else if (prenomValid.test(prenom.value) == false){
        event.preventDefault();
        missPrenom.textContent = "Format incorrect";
        return false;
    } else {
            missPrenom.textContent = "";
        }
    return true;
}
function validationAdresse(event){
    event.preventDefault();
    if (adresse.validity.valueMissing){
        event.preventDefault();
        missAdresse.textContent = "adresse manquant";
        return false;
    console.log(missAdresse.textContent);
    } else if (adresseValid.test(adresse.value) == false){
        event.preventDefault();
        missAdresse.textContent = "Format incorrect";
        return false;
    } else {
        missAdresse.textContent = "";
        }
    return true;
}
function validationVille(event){
    event.preventDefault();
    if (ville.validity.valueMissing){
        event.preventDefault();
        missVille.textContent = "Ville manquant";
        return false;
    console.log(missVille.textContent);
    } else if (villeValid.test(ville.value) == false){
        event.preventDefault();
        missVille.textContent = "Format incorrect";
        return false;
    } else {
        missVille.textContent = "";
        }
    return true;
}
function validationCodePostale(event){
    event.preventDefault();
    if (codePostale.validity.valueMissing){
        event.preventDefault();
        missCodePostale.textContent = "Code postale manquant";
        return false;
    console.log(missCodePostale.textContent);
    } else if (codePostaleValid.test(codePostale.value) == false){
        event.preventDefault();
        missCodePostale.textContent = "Format incorrect";
        return false;
    } else {
        missCodePostale.textContent = "";    
        }
    return true;
}