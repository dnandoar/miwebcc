$(document).ready(listo);

function listo()
{
    // alert("hola mundo");
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-xmark");
    });

    jQuery("header .container nav a").click(function(){
        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-xmark");
        var dev = jQuery(this).attr("href");
        // alert(dev);
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top - 76
        });
    });
}
