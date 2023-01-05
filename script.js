//premiere methode

let keyInput1 = document.querySelectorAll('input');

keyInput1[0].addEventListener("keydown", validateLetterInput);
keyInput1[1].addEventListener("input", filterLetterInput);

function validateLetterInput(event) {
    // Obtenir la valeur du code de touche
    let keyCode = event.keyCode || event.which;

    // Autoriser la saisie si la touche enfoncée est une lettre
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }

    // Autoriser la touche Backspace, Tab, Delete et Escape
    if (keyCode == 8 || keyCode == 9 || keyCode == 46 || keyCode == 27) {
        return true;
    }

    // Désactiver toutes les autres touches
    return false;
}

//Deuxieme methode

function filterLetterInput(event) {
    // Récupérer la valeur de l'input
    let inputValue = event.target.value;

    // Filtrer les caractères qui ne sont pas des lettres
    let filteredValue = inputValue.replace(/[^a-zA-Z]/gi, '');

    // Mettre à jour la valeur de l'input
    event.target.value = filteredValue;
}