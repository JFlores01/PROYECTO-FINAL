
const formulariologin = document.getElementById('formulario__login');

formulariologin.addEventListener('submit', e => {
    
    InicioSesion();
    
});

function InicioSesion (e){
    event.preventDefault();

    var nombre = document.getElementById("nombrelogin").value;
    var contraseña = document.getElementById("pswdlogin").value;



    var usuario = localStorage.getItem(nombre, contraseña);
    var datos = JSON.parse(usuario);
    
    if(usuario==null){
        alert("Datos Incorrectos");

    }else if( nombre == datos.nombre && contraseña == datos.contraseña){

        window.location.replace("/inicio");  
    }else{
        alert("Datos Incorrectos");
    }
}