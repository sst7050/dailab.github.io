document.addEventListener("DOMContentLoaded", function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const sideMenu = document.querySelector('.side_menu');
    const overlay = document.querySelector('.overlay');

    menuTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        menuTrigger.classList.toggle('active-1');
        if (sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        } else {
            sideMenu.classList.add('active');
            overlay.classList.add('active');
        }
    });

    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        menuTrigger.classList.remove('active-1');
    });

    var counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 5) {
            counter = 1;
        }
    }, 5000);

    // 드롭다운 기능 추가
    var dropdowns = document.querySelectorAll('.side_menu .dropdown > a');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            var parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
});
