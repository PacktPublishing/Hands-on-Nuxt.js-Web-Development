<?php

declare(strict_types=1);

print_r(PDO::getAvailableDrivers());

// var_dump(extension_loaded ('PDO' ));
// var_dump(extension_loaded('pdo_mysql'));
// print_r(get_loaded_extensions());

$servername = "localhost";
$username = "root";
$password = "tklau";
$dbname = "nuxt-php";

try {
    $connection = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // Set the PDO error mode to exception.
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare sql and bind parameters.
    $stmt = $connection->prepare("INSERT INTO user (uuid, name, slug, created_on, updated_on)
    VALUES (:uuid, :name, :slug, :created_on, :updated_on)");
    $stmt->bindParam(':uuid', $uuid);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':slug', $slug);
    $stmt->bindParam(':created_on', $createdOn);
    $stmt->bindParam(':updated_on', $updatedOn);

    // insert a row.
    $uuid = "25769c6c-d34d-4bfe-ba98-e0ee856f3e7a";
    $name = "John Doe";
    $slug = "john-doe";
    $createdOn = (new DateTime())->getTimestamp();
    $updatedOn = $createdOn;
    $stmt->execute();

    // insert another row.
    $uuid = "25769c6c-d34d-5bfe-ba99-e0ee856f3e7a";
    $name = "Mary Moe";
    $slug = "mary-moe";
    $createdOn = (new DateTime())->getTimestamp();
    $updatedOn = $createdOn;
    $stmt->execute();

    echo "New records created successfully";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$connection = null;
