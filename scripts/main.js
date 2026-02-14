// Fonction pour afficher un message d'alerte quand on clique sur le bouton Urgence

let boutonUrgence = document.querySelector('#btn-urgence');

// On vérifie si le bouton existe sur la page (pour éviter les erreurs)
if (boutonUrgence) {
    boutonUrgence.addEventListener('click', function() {
        alert("Appelez le numéro d'urgence : +243 99 85 39 360");
    });
}

// Petit message dans la console pour le développeur
console.log("Le site DIBAPHAR est chargé correctement.");
