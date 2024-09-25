document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des champs du formulaire
    let firstName = document.getElementById('first-name').value.trim();
    let lastName = document.getElementById('last-name').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('error-message');

    // Vérifie si l'un des champs est vide
    if (firstName === '' || lastName === '' || message === '') {
        // Si un champ est vide, afficher le message d'erreur
        errorMessage.style.display = 'block';
    } else {
        // Masquer le message d'erreur si tous les champs sont remplis
        errorMessage.style.display = 'none';

        // Créer un nouvel élément HTML pour le commentaire
        let newComment = document.createElement('div');
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200', 'py-10');

        // Ajouter le contenu du commentaire avec le prénom, nom et message
        newComment.innerHTML = `
            <div class="flex-1">
                <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        `;

        // Ajoute le nouveau commentaire à la liste des commentaires
        document.getElementById('comment-list').appendChild(newComment);

        // Réinitialise les champs du formulaire après l'ajout du commentaire
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('message').value = '';
    }
});