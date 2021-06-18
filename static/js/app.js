let selectedMenuId = 1;

const menu = document.getElementById("menu");
const cont = document.getElementById("cont");

menu.addEventListener("click", changeContent);

var altura = $('div#cont').height();

function changeContent(event) {
    const target = event.target.id;
    if(target === "menu" || target === "" || target == selectedMenuId) {
        return;
    }
    
    document.getElementById(target).classList.add("selected");

    document.getElementById(selectedMenuId).classList.remove("selected");

    const offset = selectedMenuId - target;
    cont.scrollTop -= offset * altura;

    selectedMenuId = target;
}