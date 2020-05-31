<?php

namespace Spectre\User\Controller;

use Medoo\Medoo;
// use Monolog\Logger;

abstract class Controller
{
    protected $database;

    public function __construct(
        Medoo $database
    ) {
        $this->database = $database;

        // Log anything.
        // $logger->addInfo("Logged from Spectre\User\Controller\Controller");
    }
}
