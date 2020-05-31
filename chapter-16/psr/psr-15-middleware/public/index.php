<?php declare(strict_types=1);

use function Zend\Stratigility\middleware;

// Bootstrap the app environment.
chdir(dirname(__DIR__));
require_once 'vendor/autoload.php';

$app = new Zend\Stratigility\MiddlewarePipe();

// Create a request
$request = Zend\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER,
    $_GET,
    $_POST,
    $_COOKIE,
    $_FILES
);

$app->pipe(middleware(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
        ->withHeader('Content-Type', 'text/plain');
}));

$app->pipe(middleware(function ($request, $handler) {
    $response = $handler->handle($request);
    $response->getBody()->write("User Agent: " . $request->getHeader('user-agent')[0]);
    return $response;
}));

$app->pipe(middleware(function ($request, $handler) {
    $response = new Zend\Diactoros\Response();
    $response->getBody()->write("Hello world!\n");
    $response->getBody()->write("Request method: " . $request->getMethod() . "\n");
    return $response;
}));

$response = $app->handle($request);

// Send the response to the browser.
(new Zend\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);
