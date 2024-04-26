document.addEventListener("DOMContentLoaded", function() {
    // Créer le formulaire
    let form = document.createElement("form");

    // Créer les éléments d'entrée
    let fnameInput = document.createElement("input");
    let ageInput = document.createElement("input");
    let passwordInput = document.createElement("input");
    let confirmPasswordInput = document.createElement("input");
    let submitButton = document.createElement("button");

    // Définir les attributs pour les éléments d'entrée
    fnameInput.setAttribute("type", "text");
    fnameInput.setAttribute("placeholder", "Prénom");
    fnameInput.setAttribute("id", "fname"); // Ajoutez un identifiant au champ de saisie du prénom
    ageInput.setAttribute("type", "number");
    ageInput.setAttribute("placeholder", "Age");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Mot de passe");
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("placeholder", "Confirmation mot de passe");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    // Ajouter un écouteur d'événement au formulaire
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher la soumission par défaut
        console.log("Form submitted!");
    });

    // Ajouter des éléments de saisie au formulaire
    form.appendChild(fnameInput);
    form.appendChild(ageInput);
    form.appendChild(passwordInput);
    form.appendChild(confirmPasswordInput);
    form.appendChild(submitButton);

    // Append the form to the document
    document.getElementById("form-container").appendChild(form);

    // Ajouter un écouteur d'événement keyup sur le champ de saisie du prénom
    fnameInput.addEventListener("keyup", function() {
        // Sélectionner l'élément span où le prénom sera affiché
        let displayFirstName = document.getElementById("display-firstname");
        // Mettre à jour le contenu de l'élément span avec la valeur du champ de saisie du prénom
        displayFirstName.textContent = fnameInput.value;
    });

    // Ajouter un écouteur d'événement keyup sur le champ de saisie de l'âge
    ageInput.addEventListener("keyup", function() {
        // Récupérer la valeur de l'âge
        let age = parseInt(ageInput.value);
        // Sélectionner l'élément où afficher l'âge
        let displayAge = document.getElementById("display-age");
        // Mettre à jour le contenu de l'élément avec l'âge
        displayAge.textContent = age;
    });
});
