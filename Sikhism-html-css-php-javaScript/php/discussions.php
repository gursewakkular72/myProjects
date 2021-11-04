<?php
  // error reporting
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  // Import functions
  require_once('formValidation/commentFormValidation.php');

  validate();

include 'discussionServerside.php';

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Css/discussions.css">
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
<body>
<?php  include 'templates/header.php' ?>
 <main> 
    <div class="signUp-wrapper">
    <h2>Leave your Thoughts here.</h2>
        <form action="discussions.php" method="post">
        
                <label for="name">Enter your name here: <br> <br>
                <input type="text" id="name" name ="name">   <br> <br>
                <!-- Display validation message for name input -->
                <?php the_validation_message('name'); ?> 
                </label> <br> <br>
                <label for="email"> Enter your email: <br><br>
                <input type="text" id="email" name="email" > <br>  <br> 
                <!-- Display validation message for email input -->
                <?php the_validation_message('email'); ?>  
                </label> <br> <br>                  
                <label for="comment"> Enter you comment</label> <br>                    
                <textarea name="comment" id = "comment"></textarea> <br> <br>                        
                <button  type="submit" value="Submit">Submit</button>               
            </form>
    </div>

 </main>
 <?php
      the_comments();
      
     ?>
 <?php  include 'templates/footer.php' ?>
    
</body>
</html>