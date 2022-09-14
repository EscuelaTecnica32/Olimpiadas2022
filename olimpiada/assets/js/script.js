document.getElementById("btn_registrarse").addEventListener("click", register);
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);

window.addEventListener("resize", anchoDePagina);

var cont_login_register = document.querySelector(".container_login-register");
var form_login = document.querySelector(".formulario_login");
var form_register = document.querySelector(".formulario_register");
var box_trasera_login = document.querySelector(".caja_trasera_login");
var box_trasera_register = document.querySelector(".caja_trasera_register");


function register(){

    if(window.innerWidth > 850){
        form_register.style.display = "block";
        cont_login_register.style.left = "410px";
        form_login.style.display = "none";
        box_trasera_register.style.opacity = "0";
        box_trasera_login.style.opacity = "1";
    }else{

        form_register.style.display = "block";
        cont_login_register.style.left = "0px";
        form_login.style.display = "none";
        box_trasera_register.style.display = "none";
        box_trasera_login.style.display = "block";
        box_trasera_login.style.opacity = "1";

    }
    
}

function iniciarSesion(){

    if(window.innerWidth > 850){
        form_register.style.display = "none";
        cont_login_register.style.left = "10px";
        form_login.style.display = "block";
        box_trasera_register.style.opacity = "1";
        box_trasera_login.style.opacity = "0";
    }else{

        form_register.style.display = "none";
        cont_login_register.style.left = "0px";
        form_login.style.display = "block";
        box_trasera_register.style.display = "block";
        box_trasera_login.style.display = "none";

    }
    
}

function anchoDePagina(){

    if(window.innerWidth > 850){

        box_trasera_login.style.display = "block";
        box_trasera_register.style.display = "block";

    }else{

        box_trasera_register.style.display = "block";
        box_trasera_register.style.opacity = "1";
        box_trasera_login.style.display = "none";
        form_login.style.display = "block";
        form_register.style.display = "none";
        cont_login_register.style.left = "0px";

    }

}

anchoDePagina();