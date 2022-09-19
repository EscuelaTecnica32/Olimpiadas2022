<?php

    include 'conexion_be.php';

    @session_start();

    $nombre_usuario = $_POST['nombre_usuario'];
    $password = $_POST['password'];

    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE nombre_usuario = '$nombre_usuario' 
    and password = '$password'");

    if(mysqli_num_rows($validar_login) > 0){

        $_SESSION['nombre_usuario']=$_POST["nombre_usuario"];
        header("location: ../../proyecto/prueba_1.php");

        exit;

    }else{

        echo '
        <script> 
            alert("Usuario o contraseña no válidos, intenta nuevamente"); 
            window.location = "../practica_login.php";
        </script>
    
    ';

    exit;

    }


?>