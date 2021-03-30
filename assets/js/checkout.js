const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');
const button = document.getElementById('button');

// Vérifie que la saisie de l'utilisateur respecte le pattern défini dans le html.
function checkInputs (elem) {

    let id = elem.id;
    let icon = document.querySelector(`.${id}--icon`);

        // Modifie la classe de l'icone si le champ est valide ou invalide pour l'indiquer à l'utilisateur.
        if (elem.checkValidity()) {
            icon.classList.remove('unvalid');
            icon.classList.add('valid');
        } else {
            icon.classList.add('unvalid');
            icon.classList.remove('valid');
        }
        buttonEnable ();
}

// Active le bouton de validation de commande si tous les champs du formulaire sont valides.
// Désactive le bouton de validation de commande si au moins 1 des champs du formulaire n'est pas valide.
function buttonEnable () {

    if (firstName.checkValidity()
        && lastName.checkValidity()
        && address.checkValidity()
        && city.checkValidity()
        && email.checkValidity()) {
            button.classList.remove('disabled');
            button.disabled = false;
        } else {
        button.classList.add('disabled');
        button.disabled = true;
    }
}

// Crée un objet order et renvoie vers la page de confirmation de commande.
function confirmPurchase () {
    const order = {
        contact : {
            firstName : firstName.value,
            lastName : lastName.value,
            address : address.value,
            city : city.value,
            email : email.value
        },
        products : [
            Object.keys(localStorage)
        ]
    }
    // Retourne l'objet contact, le tableau produits et order_id.
    const request = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {'Content-Type': 'application/json'}
    }
    fetch('http://localhost:3000/api/cameras/order', request)
        .then (response => response.json())
        .then ((json => {
            window.location.href = `./order.html?orderId=${json.orderId}`
            console.log(json)
        }))
}

buttonEnable();