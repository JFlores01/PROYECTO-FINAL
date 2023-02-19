function enviarLogin() {
    document.getElementById("formulario__login").submit();

    InicioSesion();

  }

// const formulariologin = document.getElementById('formulario__login');

// formulariologin.addEventListener('submit', e => {
    
//     InicioSesion();
    
// });

function InicioSesion (e){
    preventDefault();

    var nombre = document.getElementById("nombrelogin").value;
    var contraseña = document.getElementById("pswdlogin").value;



    var user = localStorage.getItem(nombre, contraseña);
    var datos = JSON.parse(user);
    
    if(user==null){
        alert("Datos Incorrectos");

    }else if( nombre == datos.nombre && contraseña == datos.contraseña){

        window.location.replace("/inicio");  
    }else{
        alert("Datos Incorrectos");
    }
}