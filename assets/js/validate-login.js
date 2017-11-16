$("#auth").validate({
    rules: {
        // Имя обязательно и спец. символы недопустимы
        login: {
            required: true,
            specialChar: true,
            minlength: 8,
            maxlength: 14,
            noSpace: true
        },
        // Минимальная длина - 6 символов,
        // Максимальная длина - 16 символов
        password: {
            required: true,
            specialChar: true,
            minlength: 6,
            maxlength: 16,
            noSpace: true
        }

    },
    // Выводим соответствующие сообщения для невалидных данных
    messages: {
        password: {
            required: "Поле 'Пароль' обязательно для заполнения.",
            specialChar: "Специальные символы недопустимы. Пожалуйста, введите корректный пароль.",
            minlength: "Минимальное количество символов для пароля: 6",
            maxlength: "Максимальное количество символов для пароля: 16",
            noSpace: "Пробелы недопустимы. Пожалуйста, введите корректный пароль."
        },
        login: {
            required: "Поле 'Логин' обязательно для заполнения.",
            specialChar: "Специальные символы недопустимы. Пожалуйста, введите корректный логин.",
            minlength: "Минимальное количество символов для логина: 8",
            maxlength: "Максимальное количество символов для логина: 14",
            noSpace: "Пробелы недопустимы. Пожалуйста, введите корректный логин."
        }
    }
});

// Добавляем новый метод-валидатор для проверки данных на спецсимволы
jQuery.validator.addMethod("specialChar", function(value, element) {
    return this.optional(element) || /([0-9a-zA-Z\s])$/.test(value);
}, "Специальные символы недопустимы. Пожалуйста, введите корректное имя.");

// Добавляем новый метод-валидатор для проверки данных на пробелы
jQuery.validator.addMethod("noSpace", function(value) {
    return value.indexOf(" ") < 0 && value != "";
}, "Пробелы недопустимы. Пожалуйста, введите корректное имя.");


//Функции для смены языка
function langEn() {
    //Получение элементов
    var heading = document.querySelector('#heading');
    var username = document.querySelector('#usernameTitle');
    var password = document.querySelector('#passwordTitle');
    var signup = document.querySelector('#signupTitle');
    var account = document.querySelector('#accountTitle');

    //Смена контента элементов
    heading.innerText = 'Log in';
    username.innerText = 'Username: ';
    password.innerText = 'Password: ';
    signup.innerText = 'Sign up';
    account.innerText = "Don't have an account?";
}


function langRu() {
    var heading = document.querySelector('#heading');
    var username = document.querySelector('#usernameTitle');
    var password = document.querySelector('#passwordTitle');
    var signup = document.querySelector('#signupTitle');
    var account = document.querySelector('#accountTitle');

    heading.innerText = 'Вход';
    username.innerText = 'Логин: ';
    password.innerText = 'Пароль: ';
    signup.innerText = 'Зарегистрироваться';
    account.innerText = "У вас нет аккаунта?";
}