$(document).ready(function(){

   
    $("#thisIsFooter").load("footer.html");

    var size = $("nav ul li").css('font-size');
    console.log("this is the font size" + size);
    
    $(window).on("scroll", function(){

        var scroll =$(window).scrollTop();
        var heigth = $("header").height();
        console.log("this is header heigth:" + heigth);

    console.log(scroll);
     
             if( scroll>$("header").height()){
                $("header").addClass("header-transitionHappening");
                $("header h1").addClass("h1-transition");
                $("nav ul li").addClass("nav-transition");
             }
             else{
              $("header").removeClass("header-transitionHappening");
              $("header h1").removeClass("h1-transition");
              $("nav ul li").removeClass("nav-transition");

             }


             var img1Height  = $(".img1").height();

             
                 
             
            
           

    });


           

    // alert("its Connected");
});