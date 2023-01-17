let Name = document.querySelector("#Name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#mail");
let log = document.querySelector("#login");
let pass = document.querySelector("#password");
let user = { Name: " ", surname: " ", log: " ", mail: " ", pass: " " };

function SaveInLS(){
    user = {Name: Name.value, surname: surname.value, log: log.value, mail:mail.value, pass: pass.value };
    localStorage.setItem("user", JSON.stringify(user));
}

Name.onchange = function (e) {

    e.preventDefault();
    SaveInLS();
}

surname.onchange = function (e) {

    e.preventDefault();
    SaveInLS();
}

email.onchange = function (e) {

    e.preventDefault();
    SaveInLS();
}

log.onchange= function (e) {
let p = document.querySelectorAll("span");
let flag = false;
for (let i = 0; i < p.length; i++) {
    if (p[i].style.color=== 'rgba(238, 34, 34, 0.9)') {
        flag = true;
    }
}
if(flag)
{
    alert("Ошибка в данных");
}
else
{
    e.preventDefault();
    SaveInLS();
}
}

pass.onchange= function (e) {
    let p = document.querySelectorAll("span");
    let flag = false;
    for (let i = 0; i < p.length; i++) {
        if (p[i].style.color=== 'rgba(238, 34, 34, 0.9)') {
            flag = true;
        }
    }
    if(flag)
    {
        alert("Ошибка в данных");
    }
    else
    {
        e.preventDefault();
        SaveInLS();
    }
    }




 function LoginVal() {
    let re = /^[а-яА-Яa-zA-Z0-9\-@.]+$/.test(log.value);

    if (re) {
        document.querySelector('#conl1').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img1').src="gal.png";
    } else {
        document.querySelector('#conl1').style.color= 'rgba(238, 34, 34, 0.9)';
        document.querySelector('#img1').src="x.png";
    }

    if ((log.value.length > 4)&&(log.value.length <50) ) {
        document.querySelector('#conl2').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img2').src="gal.png";
    } 
    }
    

log.addEventListener('input', function () {
    LoginVal();
});

function PassVal() {
    let reg = /^\d+$/.test(pass.value);

if (pass.value.length > 8) {
    document.querySelector('#conp1').style.color= 'rgba(60, 162, 85, 0.9)';
    document.querySelector('#img3').src="gal.png";
} else {
    document.querySelector('#conp1').style.color= 'rgba(238, 34, 34, 0.9)';
    document.querySelector('#img3').src="x.png";
}

if (!reg) {
    document.querySelector('#conp2').style.color= 'rgba(60, 162, 85, 0.9)';
    document.querySelector('#img4').src="gal.png";
} else {
    document.querySelector('#conp2').style.color= 'rgba(238, 34, 34, 0.9)';
    document.querySelector('#img4').src="x.png";
}

if (this.value !== '') {

    if (this.value !== login.value) {
        document.querySelector('#conp3').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img5').src="gal.png";
    } else {
        document.querySelector('#conp3').style.color= 'rgba(238, 34, 34, 0.9)';
        document.querySelector('#img5').src="gal.png";
    }

}
}

password.addEventListener('input', function () {
    PassVal();
});

let sec_password = document.querySelector("#sec_password");
sec_password.addEventListener('input', function () {
    if (this.value !== '' && password.value !== '') {

        if (this.value !== password.value) {
            document.querySelector('#consp1').style.color= 'rgba(60, 162, 85, 0.9)';
            document.querySelector('#img7').src="gal.png";
        } else {
            document.querySelector('#consp1').style.color= 'rgba(238, 34, 34, 0.9)';
            document.querySelector('#img7').src="gal.png";
        }

    }
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


window.addEventListener('load', function() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        Name.value = user.Name;
        surname.value = user.surname;
        login.value = user.log;
        email.value = user.mail;
        password.value = user.pass;
    }
    LoginVal();
    PassVal();
});