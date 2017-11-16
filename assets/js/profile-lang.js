//Функции для смены языка

function langEn() {
    //Получение элементов
    var general = document.querySelector('#generalTitle');
    var name = document.querySelector('#nameTitle');
    var surname = document.querySelector('#surnameTitle');
    var username = document.querySelector('#usernameTitle');
    var contact = document.querySelector('#contactTitle');

    //Смена контента элементов
    general.innerText = 'General information';
    username.innerText = 'Username: ';
    name.innerText = 'Name: ';
    surname.innerText = 'Surname: ';
    contact.innerText = 'Contact information';
}


function langRu() {
    var general = document.querySelector('#generalTitle');
    var name = document.querySelector('#nameTitle');
    var surname = document.querySelector('#surnameTitle');
    var username = document.querySelector('#usernameTitle');
    var contact = document.querySelector('#contactTitle');

    general.innerText = 'Основная информация';
    username.innerText = 'Логин: ';
    name.innerText = 'Имя: ';
    surname.innerText = 'Фамилия: ';
    contact.innerText = 'Контактная информация';
}