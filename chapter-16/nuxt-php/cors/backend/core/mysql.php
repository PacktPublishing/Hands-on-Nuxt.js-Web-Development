<?php
$dbconfig = require './config/mysql.php';
$mysql = new Medoo\Medoo([
    'database_type' => 'mysql',
    'database_name' => $dbconfig['name'],
    'server' => $dbconfig['host'],
    'username' => $dbconfig['username'],
    'password' => $dbconfig['password']
]);
return $mysql;
