<?php

namespace Spectre\User\Controller\Update;

// Import external packages:
use Psr\Http\Message\ServerRequestInterface;

// Import local packages:
use Spectre\User\Controller\Controller;

class User extends Controller
{
    public function update(ServerRequestInterface $request)
    {
        // Get params and validate them here.
        // $params = $request->getParsedBody();
        parse_str(file_get_contents('php://input'), $params);
        $uuid = $params['uuid'];
        $name = $params['name'];
        $slug = $params['slug'];

        // print_r(get_class_methods($request));
        // print_r($request);
        // die();

        // Create a timestamp.
        $date = new \DateTime();
        $updatedOn = $date->getTimestamp();

        // Throw if empty.
        if (!$uuid) {
            throw new \Exception('$uuid is empty', 400);
        }

        // Throw if empty.
        if (!$name) {
            throw new \Exception('$name is empty', 400);
        }

        // Throw if empty.
        if (!$slug) {
            throw new \Exception('$slug is empty', 400);
        }

        // Throw if empty.
        if (!$updatedOn) {
            throw new \Exception('$updatedOn is empty', 400);
        }

        // Assuming this is a model in a more complex app system.
        $model = new \stdClass;
        $model->uuid = $uuid;
        $model->name = $name;
        $model->slug = $slug;
        $model->updated_on = $updatedOn;

        // Update user(s).
        // https://medoo.in/api/update
        $result = $this->database->update("user", [
            "name" => $model->name,
            "slug" => $model->slug,
            'updated_on' => $model->updated_on
        ], [
            "uuid" => $model->uuid
        ]);

        // Throw if it fails.
        // Returns the number of rows affected by the last SQL statement.
        if ($result->rowCount() === 0) {
            throw new \Exception('Update row failed', 400);
        }

        // Return the model if it is OK.
        return $model;
    }
}
