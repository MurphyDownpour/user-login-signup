// Валидация формы
$("#sign-up").validate({
		rules: {
			// Имя обязательно и спец. символы недопустимы
			form_name: {
				required: true,
				specialChar: true,
				noSpace: true
			},
			form_surname: {
				required: true,
				specialChar: true,
                noSpace: true
			},
			form_email: {
				required: true,
				email: true,
                noSpace: true
			},
			// Минимальная длина - 6 символов,
			// Максимальная длина - 16 символов
			form_password: {
				required: true,
				specialChar: true,
				minlength: 6,
				maxlength: 16,
                noSpace: true
			},
			form_username: {
				required: true,
				specialChar: true,
				minlength: 8,
				maxlength: 14,
                noSpace: true
			},
			// Проверка паролей на совпадение
			form_confirm: {
				required: true,
				specialChar: true,
				equalTo: "#password",
				minlength: 6,
				maxlength: 16,
                noSpace: true
			}
	
		},
		// Выводим соответствующие сообщения для невалидных данных
		messages: {
			form_name: {
				required: "Поле 'Имя' обязательно для заполнения."
			},
			form_surname: {
				required: "Поле 'Фамилия' обязательно для заполнения.",
				specialChar: "Специальные символы недопустимы. Пожалуйста, введите корректную фамилию.",
                noSpace: "Пробелы недопустимы. Пожалуйста, введите корректную фамилию."
			},
			form_email: {
				required: "Поле 'Email' обязательно для заполнения.",
				email: "Пожалуйста, введите корректный Email.",
                noSpace: "Пробелы недопустимы. Пожалуйста, введите корректный Email."
			},
			form_password: {
				required: "Поле 'Пароль' обязательно для заполнения.",
				specialChar: "Специальные символы недопустимы. Пожалуйста, введите корректный пароль.",
				minlength: "Минимальное количество символов для пароля: 6",
				maxlength: "Максимальное количество символов для пароля: 16",
                noSpace: "Пробелы недопустимы. Пожалуйста, введите корректный пароль."
			},
			form_username: {
				required: "Поле 'Логин' обязательно для заполнения.",
				specialChar: "Специальные символы недопустимы. Пожалуйста, введите корректный логин.",
				minlength: "Минимальное количество символов для логина: 8",
				maxlength: "Максимальное количество символов для логина: 14",
                noSpace: "Пробелы недопустимы. Пожалуйста, введите корректный логин."
			},
			form_confirm: {
				required: "Пожалуйста, подтвердите пароль.",
				specialChar: "Специальные символы недопустимы. Пожалуйста, введите корректный пароль.",
				equalTo: "Пароли не совпадают. Пожалуйста, подтвердите пароль.",
				minlength: "Минимальное количество символов для пароля: 6",
				maxlength: "Максимальное количество символов для пароля: 16",
                noSpace: "Пробелы недопустимы. Пожалуйста, введите корректный пароль."
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
    var signup = document.querySelector('#signupTitle');
    var name = document.querySelector('#nameTitle');
    var surname = document.querySelector('#surnameTitle');
    var username = document.querySelector('#usernameTitle');
    var password = document.querySelector('#passwordTitle');
    var repeat = document.querySelector('#repeatTitle');
    var avatar = document.querySelector('#avatarTitle');
    var email = document.querySelector('#emailTitle');
    var button = document.querySelector('#signupButton');
    var link = document.querySelector('#loginTitle');

    //Смена контента элементов
    signup.innerText = 'Sign up';
    username.innerText = 'Username: ';
    name.innerText = 'Name: ';
    surname.innerText = 'Surname: ';
    password.innerText = 'Password: ';
    repeat.innerText = 'Repeat password: ';
    avatar.innerText = 'Photo: ';
    email.innerText = 'Email: ';
    button.innerText = 'Sign up';
    link.innerText = 'Log in';
}


function langRu() {
    var signup = document.querySelector('#signupTitle');
    var name = document.querySelector('#nameTitle');
    var surname = document.querySelector('#surnameTitle');
    var username = document.querySelector('#usernameTitle');
    var password = document.querySelector('#passwordTitle');
    var repeat = document.querySelector('#repeatTitle');
    var avatar = document.querySelector('#avatarTitle');
    var email = document.querySelector('#emailTitle');
    var button = document.querySelector('#signupButton');
    var link = document.querySelector('#loginTitle');

    signup.innerText = 'Регистрация';
    username.innerText = 'Логин: ';
    name.innerText = 'Имя: ';
    surname.innerText = 'Фамилия: ';
    password.innerText = 'Пароль: ';
    repeat.innerText = 'Повторите пароль: ';
    avatar.innerText = 'Фото: ';
    email.innerText = 'Email: ';
    button.innerText = 'Зарегистрироваться';
    link.innerText = 'Войти';
}
