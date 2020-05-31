<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$router->get('/', function (ServerRequestInterface $request) : ResponseInterface {
    return new Zend\Diactoros\Response\JsonResponse('Hello world!');
});
