<?php
// Global result of form validation
$valid = false;
// Global array of validation messages. For valid fields, message is ""
$val_messages = Array();


// Check each field to make sure submitted data is valid. 
function validate()
{

    // echo "valid is being called.";
    global $valid;
    global $val_messages;
    
    $email1 = false;
    

    if($_SERVER['REQUEST_METHOD']== 'POST')
    {

        /////////// validation for the first name
        $fuser_name =  $_POST['fname'];
        $user_fname_length = strlen($fuser_name);
  
        if($user_fname_length<5){
          $val_messages["fname"] = "<div class='errorMsg'>The First name should have atleast 5 characters</div>";
         }
  
         else if($user_fname_length>15){
          $val_messages["fname"] = "<div class='errorMsg'>The name should not have more than 15 characters</div>";
  
         }
         else if($user_fname_length==0){
            $val_messages["fname"] = "<div class='errorMsg'>Please Enter your First Name</div>";
    
           }
         else{
          $val_messages["fname"] = "";
          echo " name is correct";
         }


         //////////////// validation for the last name;
         
         $user_lname = $_POST['lname'];
         $user_lname_length = strlen($user_lname);
   
         if($user_lname_length<5){
           $val_messages["lname"] = "<div class='errorMsg'>The Last name should have atleast 5 characters</div>";
          }
   
          else if($user_lname_length>15){
           $val_messages["lname"] = "<div class='errorMsg'>The Last should not have more than 15 characters</div>";
   
          }
          else if($user_lname_length==0){
            $val_messages["lname"] = "<div class='errorMsg'>Please Enter your Last Name</div>";
    
           }
          else{
           $val_messages["lname"] = "";
           echo " name is correct";
          }

          /// paaword validation///
          $password_1 = $_POST['password'];
          $password_2 = $_POST['password1'];

          if($password_1 != $password_2){
            $val_messages["password1"] = "<div class='errorMsg'>Your password does not match</div>"; 
          }
          else if(empty($password_1)|| empty($password_2 )){
              
            $val_messages["password1"] = "<div class='errorMsg'>Please fill both the password fields</div>"; 

          }
          else if (($password_1 == $password_2)){

            $val_messages["password1"] = ""; 

          }
          else if (($password_1 == $password_2) && ((strlen($password_1) <8) || (strlen($password_2)) <8)){
              echo " it works. ";
            $val_messages["password1"] = "<div class='errorMsg'>The password should have at least 8 characters.</div>"; 
          }

        ///////////////////// validation for email
      // patterns to check email 
       $email= '#^(.+)@([^\.].*)\.([a-z]{2,})$#';
       if((preg_match($email, $_POST["email"]))){
        $val_messages["email"]= "";
        $email1 = true;
        // echo " email format has matched";
       }
       else{
        $val_messages["email"] = "<div class='errorMsg'>Please Enter a Correct Email Format</div>";
       }
      
       if( $email1){
        $valid=true;
        echo    "its Valid";
       }

  }
}


// Display error message if field not valid. Displays nothing if the field is valid.
function the_validation_message($type) {

  global $val_messages;

  if($_SERVER['REQUEST_METHOD']== 'POST')
  {
    echo "<div class='failure-message'>" . $val_messages[$type] . "</div>";
  }
}
