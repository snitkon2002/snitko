let login = document.querySelector("#login");
login.addEventListener('input', function () {
    let re = /^[а-яА-Яa-zA-Z0-9\-@.+_]+$/.test(this.value);

   
});



let password = document.querySelector("#password");
password.addEventListener('input', function () {
    let reg = /^\d+$/.test(this.value);

});

let sec_password = document.querySelector("#sec_password");
sec_password.addEventListener('input', function () {
    if (this.value !== '' && password.value !== '') {

});

let ch = document.querySelector(".checkbox");
let b = document.querySelector(".submit_button");

function ValueCheckBox(CheckBox) {
    if (!CheckBox.checked) {
        b.disabled = true;
        b.style.color='#CCCCCC;';
    } else {
        b.disabled = false;
        b.style.background='#624C91';
    }
}

ch.addEventListener('change', function () { ValueCheckBox(this) });