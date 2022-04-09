<footer>

<ul>
      <li><a href="https://www.facebook.com/" aria-label="facebook"><i class="fab fa-facebook fa-2x" aria-hidden="true"></i></a></li>
      <li><a href="https://twitter.com/" aria-label="twitter"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i></a>  </li>
      <li><a href="https://www.instagram.com" aria-label="instagram"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a></li>
    </ul>
 
    <form id="footer-form" action="https://formspree.io/gursewakkular72@gmail.com" method="post">
    <h2>Let Us know what do you think ?</h2>
        <label for="name">  
        <input placeholder="Enter you name" type="text" id="name" name ="name" data-validation="length" data-validation-length="max30"> <br>
        </label>   <br> 
        <label  for="email"> 
        <input placeholder="Enter your email" type="text" id="email" name="email" data-validation="email">  <br>
        </label>  <br>                
        <label for="comment">                        
        <textarea placeholder="What do you think"  id  = "comment" name="comment" data-validation="length" data-validation-length="max300"></textarea> <br>
        </label>  <br> <br>                       
        <button class = "submitButton" type="submit" value="Submit">Submit</button>           
    </form>
    
    <button  class="signUpButton" onclick="window.location.href = 'signUp.php';">Sign Up</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
        // WILL PREVENT FORM FROM SENDING IF THERE ARE ERRORS (comment this out to test PHP validation.)
    $.validate();
    });
    </script>
</footer>
