<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

// https://route.thephpleague.com/4.x/routes/
$router->get('/users/{slug}', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $user = (new Spectre\User\Controller\Fetch\User($database))->fetch($args);
    return new Zend\Diactoros\Response\JsonResponse($user);
});
