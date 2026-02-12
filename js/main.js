let menu = document.querySelector(".menu"),
    showMenu = document.getElementById("menu-icon");

showMenu.addEventListener("click", (e) => {
    e.stopPropagation();

    menu.classList.toggle("show-menu");
});
