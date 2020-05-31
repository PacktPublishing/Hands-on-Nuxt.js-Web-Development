<?php
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;

use Spectre\User\Controller\Update\User as UpdateUser;

// https://route.thephpleague.com/4.x/routes/
$router->put('/user', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $controllerUpdateUser = new UpdateUser($database);

    // Obtain result.
    $user = $controllerUpdateUser->update($request);
    return new JsonResponse($user);
});
