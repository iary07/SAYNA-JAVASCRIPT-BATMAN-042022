$(document).ready(function() {

    // Hover on buttons
    $(".jeux").on({
        mouseenter: function() {
            $(this).css({
                "font-weight": "bold",
                "text-decoration": "underline"
            });

        }

    });

    $(".btn").on({
        mouseenter: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 40%, #890008 100%)",
            });
        },
        mouseleave: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 0%, #890008 100%)",

            });
        },
    });

    $('.dessin').hover(function() {
        $(this).addClass('anime');
    }, function() {
        $(this).removeClass('anime');
    });
























})