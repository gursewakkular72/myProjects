<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Css/header.css">
    <link rel="stylesheet" href="../Css/sources.css">
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
    <?php  include "templates/header.php"  ?>
    <div class="pagetable">


        <table  class="tf">
            <tr>
                <th scope="col">images/articles</th>
                <th scope="col">author</th>
                <th scope="col">sources</th>
            </tr>
            <tr>
                <td><img src=../images/h1.jpg  alt="A sikh temple"></td>
                <td>Som</td>
                <td><a href="https://www.pexels.com/photo/ancient-architecture-art-blue-395944/">link to image source</a> </td>
            </tr>
            <tr>
                <td><img src="../images/Ek_onkar.png"  alt="symbol"></td>
                <td>Sukh</td>
                <td><a href="https://en.wikipedia.org/wiki/File:Ek_onkar.png">link to image source</a></td>
            </tr>
            <tr>
                <td><img src="../images/asr.jpg" alt="Golden Temple"></td>
                <td>sarah081182</td>
                <td><a href="https://pixabay.com/photos/amritsar-golden-temple-india-gold-1352417/">link to the image source</a></td>
            </tr>
            <tr>
                <td><img src="../images/asr2.jpg"  alt="Golden Temple"></td>
                <td>Darshak Pandya</td>
                <td><a href="https://pixabay.com/photos/india-punjab-amritsar-sikh-2830745/">link to the image source</a></td>
            </tr>
            <tr>
                <td><img src="../images/sarovar.jpg"  alt="Sikh bathing inside holy pond"></td>
                <td>Jeevan Singla</td>
                <td> <a href="https://pixabay.com/photos/gurudwara-patiala-sikh-bath-turban-621065/">link to the image source</a></td>
            </tr>
            <tr>
                <td><img src="../images/sikhChildren.jpg"  alt="Sikh Children"></td>
                <td>Jeevan Singla</td>
                <td><a href="https://pixabay.com/photos/sikh-religion-sikhism-punjab-holy-658511/">link to the article</a></td>
            </tr>
            
    </table>
           <p ><a style = "color:orange; text-decoration:underline;" href="https://en.wikipedia.org/wiki/Sikhism">The source for paragraphs on the articles' page is wikipedia</a></p>
</div>

    <?php  include "templates/footer.php"  ?>
</body>
</html>