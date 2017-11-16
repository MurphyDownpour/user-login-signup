<?php
require_once "Db.php";
require_once "Pages.php";

// Класс Пользователя
class User extends Pages
{
//    Служит для регистрации нового пользователя
    public function signUp($name, $surname, $avatar = null, $email, $login, $password)
    {
        $db = new Db('localhost', 'root', '', 'task');
        $user = $db->query("INSERT INTO users(name, surname, login, avatar, password, email) 
        VALUES('$name', '$surname', '$login', '$avatar', '$password', '$email')");
        if ($user)
        {
            echo self::render(null, '../pages/signup-success.html');
        }
        else
        {
            echo "No!";
        }
    }

//    Служит для входа пользователя на страницу
    public static function login($login, $password)
    {
        $db = new Db('localhost', 'root', '', 'task');
        $user = $db->query("SELECT * FROM users WHERE login = '$login'");
        if (!$user)
        {
            echo self::render(array('error' => 'Такого пользователя не существует.'), '../pages/index.html');
        }
        if ($user['password'] == $password)
        {
            echo self::render($user, '../pages/user-profile.html');
        }
    }
}