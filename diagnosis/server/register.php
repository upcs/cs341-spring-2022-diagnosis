<?php
$servername = "localhost";
$db_username = "physicz9_up_admin";
$db_password = "^x9)eQ8XGSJ{[1";
$database = "physicz9_up_dev";

require('../wp-load.php');
require_once (ABSPATH . 'wp-includes/class-phpass.php');
require('../wp-blog-header.php');
require_once (ABSPATH . 'wp-includes/user.php');

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$_POST = json_decode(array_keys($_POST)[0], true);

//create data parameters for SQL query
$name = $_POST['name'];
$user_email = $_POST['email'];
$user_login = $_POST['user'];
$user_password = $_POST['pass'];

// create and get SQL query
$sql = "SELECT * FROM `_SXA_users` WHERE `user_email` LIKE '$user_email' OR `user_login` LIKE '$user_login'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // if email or username already exists, then sign up is invalid
    echo "An account has already been created for this email or username. Try again.";
} else {
    // create user
    $mysqltime = date('Y-m-d H:i:s');
    $wp_hasher = new PasswordHash(8, true);
    $wp_password = $wp_hasher->HashPassword( trim($user_password) );
    $user_id = wp_create_user($user_login, $wp_password, trim($user_email));
    $insertSQL = "INSERT INTO `_SXA_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_registered`) VALUES (" . $user_id . "'" . $user_login . "', '" . $wp_hash . "', '" . $user_nicename . "', '" . $user_email . "', " . $mysqltime . ")";
    echo "Sign up successful";
}

// close the connection
$conn->close();
?>