<?php
// Reference-only PHP endpoint for a future backend migration.
// The production CampusOS frontend currently runs entirely on Next.js/Vercel.
header('Content-Type: application/json');
echo json_encode(['service' => 'CampusOS', 'status' => 'ok', 'runtime' => 'php-reference']);
