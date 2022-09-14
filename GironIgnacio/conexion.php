<?php

    $conexion = mysqli_connect(
        'localhost',
        'root',
        '',
        'museo'
    );

    if(!$conexion){
        echo 'error en la conexion con la base de datos';
    }

?>