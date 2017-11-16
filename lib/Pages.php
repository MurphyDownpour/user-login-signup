<?php
// Класс страниц
class Pages
{
//    Хранит в себе данные, которые будут направляться на страницу
    protected static $data;
//    Путь к странице
    protected static $path;

//    Рендерит страницу, отправляя в неё данные
    public static function render($data = array(), $path = null)
    {
        if ($data)
        {
            extract($data);
        }
        ob_start();
        include($path);
        $renderedView = ob_get_clean();
        return $renderedView;
    }
}