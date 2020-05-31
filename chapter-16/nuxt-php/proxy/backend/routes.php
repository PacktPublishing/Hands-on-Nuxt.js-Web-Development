<?php

// Import all routes from the config.
$modules = require './config/routes.php';

foreach ($modules as $module) {
    require './module/' . $module . 'index.php';
}

// Optional:
// Add a route group to all routes.
// https://route.thephpleague.com/4.x/routes/
// $router->group('/api', function (\League\Route\RouteGroup $router) use ($modules) {
//     foreach ($modules as $module) {
//         require './module/' . $module . 'index.php';
//     }
// });

// A basic example:
// use Psr\Http\Message\ResponseInterface;
// use Psr\Http\Message\ServerRequestInterface;
// use Zend\Diactoros\Response\JsonResponse;

// $router->group('/api', function (\League\Route\RouteGroup $route) {
//     $route->get('/', function (ServerRequestInterface $request) : ResponseInterface {
//         return new Zend\Diactoros\Response\JsonResponse('Hello world!');
//     });
// });
