<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

// https://route.thephpleague.com/4.x/routes/
$router->delete('/user', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $user = (new Spectre\User\Controller\Delete\User($database))->delete($request);
    return new Zend\Diactoros\Response\JsonResponse($user);
});
