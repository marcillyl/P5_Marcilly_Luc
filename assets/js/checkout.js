const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');
const button = document.getElementById('button');

function checkInputs (elem) {
    let id = elem.id;
    let icon = document.querySelector(`.${id}--icon`);
        if (elem.checkValidity()) {
            icon.classList.remove('unvalid');
            icon.classList.add('valid');
        } else {
            icon.classList.add('unvalid');
            icon.classList.remove('valid');
        }
        buttonEnable ();
}

function buttonEnable () {
    if ((firstName, lastName, address, city, email).checkValidity()) {
        button.classList.remove('disabled');
        button.disabled = false;
    } else {
        button.classList.add('disabled');
        button.disabled = true;
    }
}

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
}