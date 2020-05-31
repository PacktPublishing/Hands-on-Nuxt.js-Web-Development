<?php

declare(strict_types=1);

// Bootstrap the app environment.
chdir(dirname(__DIR__));
require_once 'vendor/autoload.php';

// Create a request
$request = Zend\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER,
    $_GET,
    $_POST,
    $_COOKIE,
    $_FILES
);

$response = new Zend\Diactoros\Response();

// Write to the response body:
$response->getBody()->write("Hello ");

// Multiple calls to write() append:
$response->getBody()->write("World!");

// Add headers
// Note: headers do not need to be added before data is written to the body!
$response = $response
    ->withHeader('Content-Type', 'text/plain');

// echo $response->getBody(); // --> Content-type: text/html; charset=UTF-8

// Send the response to the browser.
(new Zend\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response); // --> Content-type: text/plain;charset=UTF-8
