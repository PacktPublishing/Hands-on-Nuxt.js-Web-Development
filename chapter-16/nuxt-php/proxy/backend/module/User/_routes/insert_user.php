<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

// https://route.thephpleague.com/4.x/routes/
$router->post('/user', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $user = (new Spectre\User\Controller\Insert\User($database))->insert($request);
    return new Zend\Diactoros\Response\JsonResponse($user);
});
