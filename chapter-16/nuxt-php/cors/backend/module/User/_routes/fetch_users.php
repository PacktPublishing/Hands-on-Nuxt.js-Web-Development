<?php
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;

use Spectre\User\Controller\Fetch\Users as FetchUsers;

$router->get('/users', function (ServerRequestInterface $request) : ResponseInterface {
    $database = require './core/mysql.php';
    $controllerFetchUsers = new FetchUsers($database);

    // Obtain result.
    $users = $controllerFetchUsers->fetch();
    return new JsonResponse($users);
});
