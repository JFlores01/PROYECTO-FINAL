const formulario = document.getElementById('formulario__register'); // Obtener el formulario



formulario.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});



//-------LOCAL STORAGE------!


function checkInputs() {

    const verdadero = true;


    if (verdadero) {
        var nombre = document.getElementById("nombre").value;
        var contraseña = document.getElementById("pswd").value;



        /*Guardando los datos en el LocalStorage*/
        var usuario = {
            nombre: nombre,
            contraseña: contraseña

        }

        var json = JSON.stringify(usuario);
        localStorage.setItem("user", json);
        //localStorage.setItem("contraseña", json);
        console.log("Okey");
        window.location.replace("/inicio");

    }
}