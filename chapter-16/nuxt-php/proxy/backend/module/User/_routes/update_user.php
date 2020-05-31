<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

// https://route.thephpleague.com/4.x/routes/
$router->put('/user', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $user = (new Spectre\User\Controller\Update\User($database))->update($request);
    return new Zend\Diactoros\Response\JsonResponse($user);
});
