<?php
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;

use Spectre\User\Controller\Fetch\User as FetchUser;

// https://route.thephpleague.com/4.x/routes/
$router->get('/users/{slug}', function (ServerRequestInterface $request, array $args) : ResponseInterface {
    $database = require './core/mysql.php';
    $controllerFetchUser = new FetchUser($database);

    // Obtain result.
    $user = $controllerFetchUser->fetch($args);
    return new JsonResponse($user);
});
