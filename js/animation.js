function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

function showMenu() {
    let menu = document.getElementById('down-menu');
    menu.classList.toggle('show-menu');
    let icon = document.getElementById('angle-turn');
    icon.classList.toggle('icon-turn');
}

$('#carousel_slider').carousel({
    interval: 3000,
    cycle: true
}); 