var collapsible = document.querySelectorAll(".collapsible")
collapsible.forEach((item) =>{
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible-expanded")
    })
});

function expandSubMenu() {
    var subMenus = document.querySelectorAll(".sub_menu_items");

    subMenus.forEach(function(subMenu) {
        if (subMenu.classList.contains('sub_menu-expanded')) {
            subMenu.classList.remove('sub_menu-expanded');
        } else {
            subMenu.classList.add('sub_menu-expanded');
        }
    });
}
