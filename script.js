document.addEventListener("DOMContentLoaded", function() {
    // Funktion, um zu einem bestimmten Abschnitt zu scrollen
    function scrollToSection(buttonIndex) {
        var section = document.getElementById('section' + buttonIndex);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // Aktiven Button markieren
            var buttons = document.querySelectorAll('.fixed-buttons button');
            buttons.forEach(function(button) {
                button.classList.remove('active');
            });

            var activeButton = document.getElementById('button' + buttonIndex);
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }
    }

    // Scroll-Event-Listener, um den aktiven Button zu aktualisieren
    window.addEventListener("scroll", function() {
        var sections = document.querySelectorAll('.section');
        var scrollPosition = window.scrollY;

        sections.forEach(function(section, index) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                // Aktiven Button markieren
                var buttons = document.querySelectorAll('.fixed-buttons button');
                buttons.forEach(function(button) {
                    button.classList.remove('active');
                });

                var activeButton = document.getElementById('button' + (index + 1));
                if (activeButton) {
                    activeButton.classList.add('active');
                }
            }
        });
    });

    // Automatisch den ersten Button markieren
    var firstButton = document.getElementById('button1');
    if (firstButton) {
        firstButton.classList.add('active');
    }

    // Button-Click-Event-Listener, um zu dem entsprechenden Abschnitt zu scrollen
    var buttons = document.querySelectorAll('.fixed-buttons button');
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            scrollToSection(index + 1);
        });
    });
});
