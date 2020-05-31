<?php

namespace Spectre\User\Controller\Fetch;

// Import local packages:
use Spectre\User\Controller\Controller;

class User extends Controller
{
    public function fetch(array $routeParams)
    {
        // Columns to select.
        $columns = [
            'uuid',
            'name',
            'slug',
            'created_on',
            'updated_on',
        ];

        // Get user.
        // https://medoo.in/api/get
        $data = $this->database->get('user', $columns, [
            "slug" => $routeParams['slug']
        ]);

        // Throw error if no result found.
        if ($data === NULL) {
            throw new \Exception('No user found', 400);
        }

        return $data;
    }
}
