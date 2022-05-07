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

    $('.phrase').animate({ left: '0px' }, 1800);

    const popUpBox = document.getElementById('popUpBox');
    const closeBtn = document.getElementById('closeBtn');
    var msg = document.getElementById('msg');
    var value = document.querySelector('select');
    var checkBox = document.getElementById('check');
    var radio1 = document.getElementById('myRadio1');
    var radio2 = document.getElementById('myRadio2');
    var radio3 = document.getElementById('myRadio3')

    const formulaire = document.getElementById('formulaire');

    formulaire.addEventListener('submit', function(e) {
        var email = document.getElementById('voix');

        e.preventDefault()


        if (value.selectedIndex != 0 && email.value != '' && checkBox.checked == true && (radio1.checked == true || radio2.checked == true || radio3.checked == true)) {
            popUpBox.style.display = 'block';
            msg.innerText = 'MESSAGE REÇU !';


        } else {
            popUpBox.style.display = 'block';
            msg.innerText = 'Accedez à votre formulaire';
        }


    })

    closeBtn.addEventListener('click', () => {
        popUpBox.style.display = 'none'

    })























})