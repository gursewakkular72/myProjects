<?php
  // error reporting
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  // Import functions
  require_once('formValidation/signUpValidation.php');

  validate();

 ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Css/signUp.css">
    <link rel="stylesheet" href="../Css/header.css">
    <link rel="stylesheet" href="../Css/footer.css">
            <!-- jQuery validtion using plugin from http://www.formvalidator.net/ -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
     <!-- jQuery CDN Script tag here -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"> </script>
    <script src="../javaScript/home.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
</head>
<?php  include 'templates/header.php' ?>
<body>
    <main>
        <form action="signUp.php" method="post">
                <label for="fname">Enter your First name here: <br> <br>
                <input type="text" id="fname" name ="fname">
                 <!-- Displaying message for First name validation --> 
                <?php the_validation_message('fname'); ?>  
                </label> <br> <br> 
              
                <label for="lname">Enter your Last name here: <br> <br> 
                <input type="text" id="lname" name ="lname">  
                <!-- Displaying message for First name validation -->
                <?php the_validation_message('lname'); ?> 
                </label> <br> <br>
                <label for="email"> Enter your email: <br><br>
                <input type="text" id="email" name="email" > 
                <!-- Displaying message for email validation -->
                <?php the_validation_message('email'); ?>  
                </label>     <br>  <br>             
                <label for="password"> Enter your password</label> <br> <br>  
                <input type="password" id="password" name="password" > <br>  <br>                    
                <label for="password1"> Confirm your password <br>  <br>
                <input type="password" id="password1" name="password1" > 
                <!-- Displaying message for email validation -->
                <?php the_validation_message('password1'); ?>  
                </label><br>  <br>                       
                <button class = "submitButton" type="submit" value="Submit">Submit</button> 
        </form>
    </main>
<?php  include 'templates/footer.php' ?>   
</body>
</html>