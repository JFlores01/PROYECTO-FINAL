const formulario = document.getElementById('formulario__register'); // Obtener el formulario
// const Nombre = document.getElementById('nombre'); // Obtener el campo de nombre completo
// const correoElectronico = document.getElementById('email'); // Obtener el campo de correo electrónico
// const contrasena = document.getElementById('pwsd'); // Obtener el campo de contraseña
// const repetirContrasena = document.getElementById('repetir_contraseña'); // Obtener el campo de repetir contraseña

// formulario.addEventListener('submit', (e) => { // Agregar un evento de escucha para cuando se envía el formulario
//   let errores = []; // Crear una matriz para almacenar los errores

//   // Validar el campo de nombre completo
//   if (nombreCompleto.value.trim() === '' || !nombreCompleto.value.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
//     errores.push('El campo Nombre completo debe contener al menos un nombre y un apellido y no debe contener números.');
//   }

//   // Validar el campo de correo electrónico
//   if (correoElectronico.value.trim() === '' || !correoElectronico.value.match(/^\S+@\S+\.\S+$/)) {
//     errores.push('El campo Correo electrónico debe tener un formato de email sin espacios.');
//   }

//   // Validar el campo de contraseña
//   if (contrasena.value.length < 6 || contrasena.value.match(/[^a-zA-Z0-9]/)) {
//     errores.push('El campo Contraseña debe tener más de 5 caracteres y no permitirá caracteres especiales.');
//   }

//   // Validar el campo de repetir contraseña
//   if (repetirContrasena.value !== contrasena.value) {
//     errores.push('El campo Repetir contraseña debe ser igual al valor introducido en el campo Contraseña.');
//   }

//   if (errores.length > 0) { // Si hay errores, prevenimos el envio del formulario y mostramos los errores
//     e.preventDefault();
//     const mensajeError = errores.join('\n');
//     alert(mensajeError);
//   }
// });



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