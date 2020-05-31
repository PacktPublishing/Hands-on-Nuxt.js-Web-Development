<?php

// Import external packages:
use function Zend\Stratigility\middleware;

// Lock down the entire application by adding the middleware to the router.
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

// // Or:
// // Enable CORS - you can do it here or in a separate middleware in middleware/cors.php

// use Psr\Http\Message\ResponseInterface;
// use Psr\Http\Message\ServerRequestInterface;
// $router->map('OPTIONS', '/{routes:.+}', function (ServerRequestInterface $request) : ResponseInterface {
//     $response = new Zend\Diactoros\Response;
//     return $response;
// });

// $router->middleware(middleware(function ($request, $handler) {
//     $response = $handler->handle($request);
//     $existingContent = (string) $response->getBody();
//     $contentDecoded = json_decode($existingContent, true);
//     $status = $response->getStatusCode();
//     $data = [
//         "status" => $status,
//         "data" => $contentDecoded
//     ];
//     $payload = json_encode($data);

//     $response->getBody()->rewind();
//     $response->getBody()->write($payload);

//     return $response
//           ->withHeader('Content-Type', 'application/json')
//           ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//           ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//           ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//           ->withStatus($status);
// }));
