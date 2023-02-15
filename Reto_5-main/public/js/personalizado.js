
function switchTheme() {
    var button = document.getElementById("switch");
    if (button.innerHTML === "Dark Theme") {
        button.innerHTML = "Light Theme";
        document.body.classList.add("oscuro");
        button.classList.remove("btn-light");
        button.classList.add("btn-dark");
        button.classList.add("active");
    } else {
        button.innerHTML = "Dark Theme";

        document.body.classList.remove("oscuro");
        button.classList.remove("btn-dark");
        button.classList.add("btn-light");
        button.classList.remove("active");
    }
}

document.getElementById("switch").addEventListener("click", switchTheme);