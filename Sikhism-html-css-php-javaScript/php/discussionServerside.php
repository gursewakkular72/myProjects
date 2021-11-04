<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// global array of posts, to be fetched from database
$comments = [];
// global array of unique commenter email addresses to be fetched from db


require_once 'database/database.php';
require_once 'templates/template_functions.php';

//connect to database: PHP Data object representing Database connection
$pdo = db_connect();
// submit comment to database
if($valid){
    handle_form_submission();
}
else {
    echo "";
}



// Get comments from database
get_comments();
