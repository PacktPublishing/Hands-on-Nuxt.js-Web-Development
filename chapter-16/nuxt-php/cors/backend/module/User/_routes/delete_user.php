<?php
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;

use Spectre\User\Controller\Delete\User as DeleteUser;

// https://route.thephpleague.com/4.x/routes/
$router->delete('/user', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $controllerDeleteUser = new DeleteUser($database);

    // Obtain result.
    $user = $controllerDeleteUser->delete($request);
    return new JsonResponse($user);
});
