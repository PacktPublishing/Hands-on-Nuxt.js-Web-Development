<?php
namespace Spectre\User\Controller\Delete;

// Import external packages:
use Psr\Http\Message\ServerRequestInterface;

// Import local packages:
use Spectre\User\Controller\Controller;

class User extends Controller
{
    public function delete(ServerRequestInterface $request)
    {
        // Get params and validate them here.
        // $params = $request->getParsedBody();
        parse_str(file_get_contents('php://input'), $params);
        $uuid = $params['uuid'];

        // print_r(get_class_methods($request));
        // print_r($params);
        // die();

        // Throw if empty.
        if (!$uuid) {
            throw new \Exception('$uuid is empty', 400);
        }

        // Assuming this is a model in a more complex app system.
        $model = new \stdClass;
        $model->uuid = $uuid;

        // Delete user(s).
        // https://medoo.in/api/delete
        $result = $this->database->delete("user", [
            "uuid" => $model->uuid
        ]);

        // Check the number of rows affected by the last SQL statement.
        // Throw if it fails.
        if ($result->rowCount() === 0) {
            throw new \Exception('Delete row failed', 400);
        }

        // Return the model if it is OK.
        return $model;
    }
}
