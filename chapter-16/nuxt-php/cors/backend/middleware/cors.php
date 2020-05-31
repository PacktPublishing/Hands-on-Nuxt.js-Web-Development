<?php
// Import external packages:
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use function Zend\Stratigility\middleware;

// Set OPTIONS HTTP requests for PUT, DELETE, and PATCH methods.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
// https://dev.to/effingkay/cors-preflighted-requests--options-method-3024
// https://blog.morethancode.dev/killing-cors-preflight-requests-on-a-react-spa/
// https://www.quora.com/What-is-the-function-of-HTTP-OPTIONS-method
// https://medium.com/@praveen.beatle/avoiding-pre-flight-options-calls-on-cors-requests-baba9692c21a
$router->map('OPTIONS', '/{routes:.+}', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Zend\Diactoros\Response;
    return $response;
});

$router->middleware(middleware(function ($request, $handler) {
    $cors = require './config/cors.php';
    $response = $handler->handle($request);
    return $response
        ->withHeader('Access-Control-Allow-Origin', $cors['origin'])
        ->withHeader('Access-Control-Allow-Headers', $cors['headers.allow'])
        ->withHeader('Access-Control-Allow-Methods', $cors['methods'])
        ;
}));

// Or:
// https://github.com/tuupola/cors-middleware
// $router->middleware(new Tuupola\Middleware\CorsMiddleware([
//     'origin' => ['http://localhost:3000'],
//     'methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     'headers.allow' => ['X-Requested-With, Content-Type, Accept, Origin, Authorization'],
//     'headers.expose' => [],
//     'credentials' => false,
//     'cache' => 0,
// ]));

// To verify:

// $ curl "http://localhost:8181/users" \
//     --request OPTIONS \
//     --include \
//     --header "Origin: http://localhost:3000" \
//     --header "Access-Control-Request-Method: PUT"

// HTTP/1.1 200 OK
// Host: localhost:8181
// Date: Tue, 10 Sep 2019 18:39:03 GMT
// Connection: close
// X-Powered-By: PHP/7.2.19-0ubuntu0.19.04.2
// Content-Type: application/json
// Access-Control-Allow-Origin: http://localhost:3000
// Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS

// $ curl "http://localhost:8181/users" \
//     --request OPTIONS \
//     --include \
//     --header "Origin: http://localhost:3000" \
//     --header "Access-Control-Request-Method: PUT" \
//     --header "Access-Control-Request-Headers: Authorization, If-Match"

// Result:

// HTTP/1.1 200 OK
// Host: localhost:8181
// Date: Tue, 10 Sep 2019 18:33:57 GMT
// Connection: close
// X-Powered-By: PHP/7.2.19-0ubuntu0.19.04.2
// Content-Type: application/json
// Access-Control-Allow-Origin: http://localhost:3000
// Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
