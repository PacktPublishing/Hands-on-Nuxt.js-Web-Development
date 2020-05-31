<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$router->get('/users', function (ServerRequestInterface $request) : ResponseInterface {
    $database = require './core/mysql.php';
    $users = (new Spectre\User\Controller\Fetch\Users($database))->fetch();
    return new Zend\Diactoros\Response\JsonResponse($users);
});
