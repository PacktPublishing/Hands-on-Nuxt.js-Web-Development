<?php

declare(strict_types=1);

// Bootstrap the app environment.
chdir(dirname(__DIR__));
require_once 'vendor/autoload.php';

$request = Zend\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
);

$router = new League\Route\Router;

// Catch 404, 4xx, and 5xx errors.
// https://github.com/thephpleague/route/issues/165
try {
    // Register middlewares.
    require 'middlewares.php';

    // Register routes.
    require 'routes.php';

    $response = $router->dispatch($request);
} catch(Exception $exception) {
    $status = method_exists($exception, 'getStatusCode') ?
        $exception->getStatusCode() :
        $exception->getCode();

    $data = [
        "status" => $status,
        "message" => $exception->getMessage()
    ];

    // Enable CORS for all exceptions.
    $cors = require './config/cors.php';

    // https://docs.zendframework.com/zend-diactoros/v2/custom-responses/#json-responses
    $response = new Zend\Diactoros\Response\JsonResponse($data, $status, [
        'Access-Control-Allow-Origin' => [ $cors['origin'] ]
    ]);
}

// Send the response to the browser.
(new Zend\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);
