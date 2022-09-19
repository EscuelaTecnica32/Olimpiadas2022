<?php

include("conexion.php");
    session_start();

    $_SESSION['nombre'] = $_GET['nombre'];

    echo "ESTO VIENE DEL SESSION.PHP -> " . $_SESSION['nombre'];

?>