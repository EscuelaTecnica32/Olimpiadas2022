<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo_electronico = $_POST['correo_electronico'];
    $nombre_usuario = $_POST['nombre_usuario'];
    $password = $_POST['password'];

    //cifrado de contraseña
    //$password = hash('sha512', $password);

    $query = "INSERT INTO usuarios(nombre_completo, correo_electronico, nombre_usuario, password) 
              VALUES('$nombre_completo', '$correo_electronico', '$nombre_usuario', '$password')";


    //Verificación de que el correo no se repite
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo_electronico = '$correo_electronico'");

    if(mysqli_num_rows($verificar_correo) > 0){

        echo '
        
            <script> 
                alert("El correo ya está registrado, intenta nuevamente"); 
                window.location = "../practica_login.php";
            </script>
        
        ';

        mysqli_close($conexion);
        exit();

    }


    //Verificación de que el usuario no se repite
    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE nombre_usuario = '$nombre_usuario'");

    if(mysqli_num_rows($verificar_usuario) > 0){

        echo '
        
            <script> 
                alert("El nombre de usuario ya está registrado, intenta nuevamente"); 
                window.location = "../practica_login.php";
            </script>
        
        ';

        mysqli_close($conexion);
        exit();

    }


    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){

        echo '
        
            <script> 
                alert("Usuario creado exitosamente"); 
                window.location = "../practica_login.php";
            </script>
        
        ';

    }else{

        echo '
        
            <script> 
                alert("Inténtelo nuevamente, usuario no creado"); 
                window.location = "../practica_login.php";
            </script>
        
        ';

    }

    mysqli_close($conexion);

?>