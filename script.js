const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-pass');
const button = document.querySelector('#button');
const validationText = document.querySelector('.validation');

let pass = '';

confirmPass.addEventListener('keydown', validate);
function validate(e) {
    if(e.key == 'Backspace'){
        pass = pass.substring(0 ,pass.length-1);
    }else if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 48 && e.keyCode <= 57){
        pass += e.key;
    }

    if (password.value != pass) {
        confirmPass.style.color = '#c50505';
        password.style.color = '#c50505';
        validationText.textContent = "*Please enter the same password";
    }
    else {
        confirmPass.style.color = '#ffffff';
        password.style.color = '#ffffff';
        validationText.textContent = '';
    }
}