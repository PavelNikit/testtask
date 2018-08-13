$(function() {
    // makes progressbar work 
    $( "ul li" ).click(function() {
 
        if ( $("ul li").hasClass( "is-active" ) ) {
     
            $("ul li").removeClass("is-active");
        } 
            $(this).addClass("is-active"); 
    });

    // auto-increase in size textarea, plugin.
    $("textarea").autoResize();

    // loads foto or hobby input on click or dbclick.
    function showInput(){
        if($("div.about_img").is(":visible")) {
        $("div.about_img").hide();
     };
        $("div.about_hobby").fadeIn("slow");
     };
     
     function showImage(){
         if($("div.about_hobby").is(":visible")) {
         $("div.about_hobby").hide();
        };
         $("div.about_img").fadeIn("slow");
     };
     
     var clickCount = 0;
     
     
     $("h4.about_trigger").on("click", function(){
         clickCount ++;
     if(clickCount == 1) {
       timerId=setTimeout(function(){
           clickCount = 0;
           showInput();
     },400);
     } else if (clickCount == 2) {
         clearTimeout(timerId);
         clickCount = 0;
         showImage();
     }
     
     });
});