<?php
    require_once "../lib/Db.php";
    require_once "../lib/User.php";

//    Получаем данные, отправленные пользователем и пытаемся залогиниться
    $login = $_REQUEST['login'];
    $password = $_REQUEST['password'];
    User::login($login, $password);

