<?php
//Класс БД

class Db
{
//    Хранит  строку подключения
    public $connection;

//    Инициализирует поле
    public function __construct($host, $user, $password, $db_name)
    {
        $this->connection = mysqli_connect($host, $user, $password, $db_name);
        if (mysqli_connect_error())
        {
            throw new Exception("Не удалось подключиться к базе данных.");
        }
    }

//    Служит для выполнения запроса к БД
    public function query($sql)
    {
        if (!$this->connection)
        {
            return false;
        }
        $result = mysqli_query($this->connection, $sql);
        if (is_object($result))
        {
            $row = mysqli_fetch_array($result);
            return $row;
        }
        if ($result == true || $result == 1)
        {
            return true;
        }
    }

//    Избавление от спецсимволов
    public function escape($str)
    {
        return mysqli_escape_string($this->connection, $str);
    }
}