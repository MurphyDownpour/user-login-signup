<?php
require_once '../lib/User.php';

//  Получаем данные от пользователя и пытаемся его зарегистрировать
    $name = $_REQUEST['form_name'];
    $surname = $_REQUEST['form_surname'];
    $email = $_REQUEST['form_email'];
    $login = $_REQUEST['form_username'];

    if (!empty($_FILES['form_image']))
    {
        $path = "../uploads/";
        $path = $path . basename($_FILES['form_image']['name']);
        if(move_uploaded_file($_FILES['form_image']['tmp_name'], $path))
        {
            $image = $path;
        }
    }
    else
    {
        $image = '';
    }
    $password = $_REQUEST['form_password'];

    $user = new User();
    $user->signUp($name, $surname, $image, $email, $login, $password);