document.addEventListener("DOMContentLoaded", function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const sideMenu = document.querySelector('.side_menu');
    const overlay = document.querySelector('.overlay');

    menuTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        menuTrigger.classList.toggle('active-1');
        if (sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            sideMenu.style.height = '0';
            overlay.classList.remove('active');
        } else {
            sideMenu.classList.add('active');
            sideMenu.style.height = sideMenu.scrollHeight + 'px';
            overlay.classList.add('active');
        }
    });

    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        sideMenu.style.height = '0';
        overlay.classList.remove('active');
        menuTrigger.classList.remove('active-1');
    });
});
