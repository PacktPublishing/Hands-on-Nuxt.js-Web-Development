<?php

declare(strict_types = 1);

function returnInt(int $value): int
{
    return $value;
    // return $value + 1.0; // error
}

print(returnInt(2));
