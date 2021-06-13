/* Activadpr de jQuery */
$(document).ready(function(){
    $(document).ready(function(){

        // Activación de transición del menú principal
        $('aside#menu-hamburguesa nav a, header article nav a').bind('click',function(event){
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000,'easeOutExpo');
            event.preventDefault();
        });
    
    
    });

});
