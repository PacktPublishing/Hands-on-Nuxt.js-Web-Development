<?php declare(strict_types=1);

// Bootstrap the app environment.
chdir(dirname(__DIR__));
require_once 'vendor/autoload.php';

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

$request = Zend\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER,
    $_GET,
    $_POST,
    $_COOKIE,
    $_FILES
);

$router = new League\Route\Router;

// Anonymous middleware
// https://docs.zendframework.com/zend-stratigility/v3/creating-middleware/
// https://route.thephpleague.com/4.x/middleware/
$router->middleware(new class implements MiddlewareInterface {
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler) : ResponseInterface
    {
        $response = $handler->handle($request);
        return $response->withHeader('X-Clacks-Overhead', 'GNU Terry Pratchett');
    }
});

// map a route
$router->map('GET', '/', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Zend\Diactoros\Response;
    $response->getBody()->write('<h1>Hello, World!</h1>');
    return $response;
});

$response = $router->dispatch($request);

// send the response to the browser
(new Zend\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);
