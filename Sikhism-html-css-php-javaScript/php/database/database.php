<?php
require 'config.php';
// require 'database/../formValidation/commentFormValidation.php';

// Should return a PDO
function db_connect() {

  try {
    $connectionString = 'mysql:host=' . DBHOST . ';dbname=' . DBNAME;
    $user = DBUSER;
    $pass = DBPASS;

    // MAKE CONNECTION AND SET UP ERROR STUFF
    $pdo = new PDO($connectionString, $user, $pass);

    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
  
    return $pdo;
  }
  catch (PDOException $e)
  {
    die($e->getMessage());
  }
}


// Handle form submission
function handle_form_submission() {
  global $pdo;

  if($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $sql = "INSERT INTO comments (date, name, email, commentText) VALUES (?,?,?,?)";
    
    $statement = $pdo->prepare($sql);

    $statement -> bindValue(1, date('Y-m-d'));
    $statement -> bindValue(2, $_POST['name']);
    $statement -> bindValue(3, $_POST['email']);
    $statement -> bindValue(4, $_POST['comment']);

    $statement -> execute();
    
  }
}



// Get all comments from database and store in $comments
function get_comments() {
  global $pdo;
  global $comments;


  $sql = "SELECT * FROM comments ORDER BY ID DESC";
  $result = $pdo->query($sql);
  $i = 0;
  while ($row=$result->fetch()) {
   
    $comments[$i++] = Array($row["ID"],$row["date"],$row["name"],$row["email"],$row["commentText"]);
  }
}


