document.addEventListener("DOMContentLoaded", function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const sideMenu = document.querySelector('.side_menu');

    menuTrigger.addEventListener('click', function() {
        menuTrigger.classList.toggle('active-1');
        if (sideMenu.style.display === "block") {
            sideMenu.style.display = "none";
        } else {
            sideMenu.style.display = "block";
        }
    });
});