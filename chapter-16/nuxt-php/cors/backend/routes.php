<?php
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;

// Import all routes from the config.
$modules = require './config/routes.php';

foreach ($modules as $module) {
    require './module/' . $module . 'index.php';
}

//  Catch-all route to serve a 404 Not Found page if none of the routes match
//  NOTE: make sure this route is defined last
$router->map('GET', '/{routes:.+}', function (ServerRequestInterface $request) : ResponseInterface {
    throw new League\Route\Http\Exception\NotFoundException;
});
