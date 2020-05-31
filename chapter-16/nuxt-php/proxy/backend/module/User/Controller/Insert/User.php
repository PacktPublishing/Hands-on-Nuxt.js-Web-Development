<?php

namespace Spectre\User\Controller\Insert;

// Import external packages:
use Psr\Http\Message\ServerRequestInterface;
use Ramsey\Uuid\Uuid;

// Import local packages:
use Spectre\User\Controller\Controller;

class User extends Controller
{
    public function insert(ServerRequestInterface $request)
    {
        // Get params and validate them here.
        $params = $request->getParsedBody();
        $name = $params['name'];
        $slug = $params['slug'];

        // print_r(get_class_methods($request));
        // print_r($request->getParsedBody());
        // print_r($request);
        // die();

        // Create a timestamp.
        $date = new \DateTime();
        $createdOn = $date->getTimestamp();
        // Or:
        // $createdOn = time();

        // Generate a version 3 (name-based and hashed with MD5) UUID object.
        // https://github.com/ramsey/uuid
        $uuid3 = Uuid::uuid3(Uuid::NAMESPACE_DNS, $slug);
        $uuid = $uuid3->toString();

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
        if (!$createdOn) {
            throw new \Exception('$createdOn is empty', 400);
        }

        // Assuming this is a model in a more complex app system.
        $model = new \stdClass;
        $model->uuid = $uuid;
        $model->name = $name;
        $model->slug = $slug;
        $model->created_on = $createdOn;

        // Insert user.
        // https://medoo.in/api/insert
        $result = $this->database->insert('user', [
            'uuid' => $model->uuid,
            'name' => $model->name,
            'slug' => $model->slug,
            'created_on' => $model->created_on
        ]);

        // Throw if it fails.
        // Returns the number of rows affected by the last SQL statement.
        if ($result->rowCount() === 0) {
            throw new \Exception('Insert row failed', 400);
        }

        // Return the model if it is OK.
        return $model;
    }
}
