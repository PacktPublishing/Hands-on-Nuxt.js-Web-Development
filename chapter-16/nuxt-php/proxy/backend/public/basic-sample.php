<?php

declare(strict_types=1);

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;
use function Zend\Stratigility\middleware;

require_once __DIR__.'/../vendor/autoload.php';

// Catching 404 & 4xx errors.
// https://github.com/thephpleague/route/issues/165
try {
    $request = Zend\Diactoros\ServerRequestFactory::fromGlobals(
        $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
    );
    $router = new League\Route\Router;

    // Set strategy for 404 and 4xx errors (for now).
    // https://route.thephpleague.com/4.x/strategies/
    // $responseFactory = new Zend\Diactoros\ResponseFactory;
    // $strategy = new League\Route\Strategy\JsonStrategy($responseFactory);
    // $router->setStrategy($strategy);

    // Using the example middleware above, we can lock down the entire application by adding the middleware to the router.
    $router->middleware(middleware(function ($request, $handler) {
        $response = $handler->handle($request);
        $existingContent = (string) $response->getBody();
        $contentDecoded = json_decode($existingContent, true);
        $status = $response->getStatusCode();
        $data = [
            "status" => $status,
            "data" => $contentDecoded
        ];
        $payload = json_encode($data);

        $response->getBody()->rewind();
        $response->getBody()->write($payload);

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($status);
    }));

    // Map a route - home page returning hello world message.
    $router->get('/', function (ServerRequestInterface $request) : ResponseInterface {
        return new JsonResponse('Hello world!');
        // Or:
        // $response = new Zend\Diactoros\Response;
        // $response->getBody()->write('<h1>Hello, World!</h1>');
        // return $response;
    });

    // Example route for returning an error to the front.
    $router->get('/foo', function (ServerRequestInterface $request) : ResponseInterface {
        // Using JsonResponse:
        // return new JsonResponse('Hello world!', 404);
        //
        // Or PHP default Exception:
        // throw new \Exception('error', 400);
        //
        // Or League's Exception:
        throw new League\Route\Http\Exception\BadRequestException;
    });
    $response = $router->dispatch($request);

// Catch all exceptions.
} catch(Exception $exception) {

// Or catch League's Exception
// } catch(League\Route\Http\Exception $exception) {

    // Print all methods in a class ($exception), you might get getStatusCode()
    // or getCode() from $exception.
    // print_r(get_class_methods($exception));

    $data = [
        "status" => method_exists($exception, 'getStatusCode') ? $exception->getStatusCode() : $exception->getCode(),
        "message" => $exception->getMessage()
    ];
    $response = new JsonResponse($data);
}

// Send the response to the browser.
(new Zend\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);
