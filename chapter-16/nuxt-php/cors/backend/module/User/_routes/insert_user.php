<?php
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;

use Spectre\User\Controller\Insert\User as InsertUser;

// https://route.thephpleague.com/4.x/routes/
$router->post('/user', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $controllerInsertUser = new InsertUser($database);

    // Obtain result.
    $user = $controllerInsertUser->insert($request);
    return new JsonResponse($user);
});
