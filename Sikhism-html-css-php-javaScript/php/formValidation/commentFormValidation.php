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

      $user_name =  $_POST['name'];
      $user_name_length = strlen($user_name);

      if($user_name_length<5){
        $val_messages["name"] = "<div class='errorMsg'>The name should have atleast 5 characters</div>";
       }

       else if($user_name_length>25){
        $val_messages["name"] = "<div class='errorMsg'>The name should not have more than 25 characters</div>";

       }
       else if (($user_name_length==0)){
        $val_messages["name"] = "<div class='errorMsg'>Please Enter your name.</div>";
        
       }
       else{
        $val_messages["name"] = "";
       }
        
      // Use these patterns to check email and date, or come up with your own.
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

?>