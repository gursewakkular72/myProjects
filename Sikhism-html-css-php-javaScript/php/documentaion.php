<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Css/documentation.css">
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
    <p>1. This website has 6 pages.</p>
    <p>2. For the header, a php header template is used. For all the pages that header template is used.
     The header has some transition features, that are implemented with help of JQuery. The CSS grid and flex is used for designing this template.  </p> 
    <p>3. The First page has some pictures and the links to the sources used for this page are  provided on the sources page. The page is designed using CSS grid and flex</p>
    <p>4. The second page is Articles' page. The articles have the links to their sources at bottom. An animation is used for paragraphs, the paragraphs expands when
    the page finishes loading. The CSS grid and flex is used for designing this page. </p>
    <p>5. The third page  has a form that allows the user to comment. The form does the server side validation using 
    PHP before saving data into the database. The comments are fetched from the database and displayed at the bottom.
    <p>6. The fourth page is the sign UP page. This page does nothing except server side validation if the user inserts the incorrect input.</p>
    <p>7. The fourth page is the sources page. That has links to different resources that are used in building this website. The sources can be visited by 
    clicking on the orange links.</p>
    <p>8. The fifth is the documentation page, which explains the  features and techniques used in the  making of the website.</p>
    <p>9. For the footer, a php footer template is used. The footer has links to different social media platforms such as Facebook. It has a form which helps a user to send
    their thoughts to the developer. The form sends the data to the user using formspree. The forms performs the client side validation using JQuery Plugin.
    The server side validation is done by the formspree Service provider. The footer has signUp button which takes the user to sign UP page upon click.<p>
    <p></p>
    



    </main>
    

    <?php  include 'templates/footer.php' ?>    
</body>
</html>