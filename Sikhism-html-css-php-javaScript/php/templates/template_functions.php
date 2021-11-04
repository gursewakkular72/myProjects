<?php
require "format_comment_text.php";
// Output comments to HTML
function the_comments() {
  global $comments;

  
  echo "<div class='comments'><h2>Comments</h2>";
  foreach($comments as $data) {
      echo '<div class="comment">';
      echo '<div class="ID"><span>Post ID: </span>'.$data[0].'</div> <br>';
      echo '<div class="date"><span>Posted on: </span>'.$data[1].'</div><br>';
      echo '<div class="name"><span>Comment by: </span>'.$data[2].'</div><br>';
      echo '<div><span>Email: </span>'.$data[3].'</div><br><br>';
      echo '<div class="commentText"><span></span>'.$data[4].'</div>';
      echo '</div>';
      echo  '<br><br>';
  }
     echo "</div> <br> <br>";
}



  

