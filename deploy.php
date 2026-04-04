<?php
/**
 * SteamedAndBaked.net — GitHub Webhook Auto-Deploy
 * Triggered by: GitHub > Settings > Webhooks > Push event
 * Secret: sab-deploy-2026
 *
 * Setup:
 *   GitHub → Repo → Settings → Webhooks → Add webhook
 *   Payload URL:  https://steamedandbaked.net/deploy.php
 *   Content type: application/json
 *   Secret:       sab-deploy-2026
 *   Events:       Just the push event
 */

define('DEPLOY_SECRET', 'sab-deploy-2026');
define('REPO_PATH',     '/home/jpsteamed/steamedandbaked.net');
define('LOG_FILE',      '/home/jpsteamed/steamedandbaked.net/deploy.log');

// Read raw POST body
$payload_raw = file_get_contents('php://input');

// Verify GitHub signature
$sig_expected = 'sha256=' . hash_hmac('sha256', $payload_raw, DEPLOY_SECRET);
$sig_received = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

if (!hash_equals($sig_expected, $sig_received)) {
    http_response_code(403);
    die('Forbidden: signature mismatch');
}

// Decode JSON payload
$payload = json_decode($payload_raw, true);
$ref     = $payload['ref'] ?? '';

// Only deploy on pushes to main
if ($ref !== 'refs/heads/main') {
    http_response_code(200);
    die('Ignored: not main branch (got: ' . htmlspecialchars($ref) . ')');
}

// Run git pull
$output = shell_exec('cd ' . escapeshellarg(REPO_PATH) . ' && git pull origin main 2>&1');

// Log the deployment
$log_entry = '[' . date('Y-m-d H:i:s') . '] Deployed from ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n" . $output . "\n---\n";
file_put_contents(LOG_FILE, $log_entry, FILE_APPEND | LOCK_EX);

// Set permissions after pull
shell_exec('find ' . escapeshellarg(REPO_PATH) . ' -type d -exec chmod 755 {} \;');
shell_exec('find ' . escapeshellarg(REPO_PATH) . ' -type f -name "*.php" -exec chmod 644 {} \;');
shell_exec('find ' . escapeshellarg(REPO_PATH) . ' -type f ! -name "*.php" -exec chmod 644 {} \;');

header('Content-Type: text/plain');
echo 'Deployed at ' . date('Y-m-d H:i:s') . "\n";
echo $output;
