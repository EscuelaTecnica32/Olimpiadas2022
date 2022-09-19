<?php

include('conexion.php');

$consulta = $_GET['consulta'];
if ($consulta) {
    switch ($consulta) {
        case 'obtenerCantidadTurnosTomados':
            if (isset($_GET['id_recorrido'])) {
                $sql = "SELECT count(*) as cant from turnos where id_recorrido = " . $_GET['id_recorrido'];

                $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                $json = array();
                while ($row = $query->fetch_assoc()) {
                    $json[] = array(
                        "cantTurnosTomados" => $row['cant']
                    );
                }
                echo json_encode($json);
            }
            break;
        case 'obtenerRecorridos':
            $sql = "SELECT * from recorrido";

            $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
            $json = array();
            while ($row = $query->fetch_assoc()) {
                $json[] = array(
                    "id" => $row['id'],
                    "obras" => $row['obras'],
                    "tematica" => $row['tematica'],
                    "duracion" => $row['duracion']
                );
            }
            echo json_encode($json);
            break;
        case 'obtenerTurnosUsuario':
            if (isset($_GET['id_usuario'])) {
                $sql = "SELECT * from turnos where id_usuario = " . $_GET['id_usuario'];

                $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                $json = array();
                while ($row = $query->fetch_assoc()) {
                    $json[] = array(
                        "id" => $row['id'],
                        "id_usuario" => $row['id_usuario']
                    );
                }
                echo json_encode($json);
            }
            break;
        case 'obtenerTurnosDisponibles':
            $sql = "SELECT * from turnos where id_usuario = 1";

            $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
            $json = array();
            while ($row = $query->fetch_assoc()) {
                $json[] = array(
                    "id" => $row['id'],
                    "id_usuario" => $row['id_usuario'],
                    "id_recorrido" => $row['id_recorrido']
                );
            }
            echo json_encode($json);
            break;
        case 'insertarRecorrido':
            if (isset($_GET['obras']) && isset($_GET['tematica']) && isset($_GET['duracion'])) {
                $sql = "INSERT INTO recorrido(obras, tematica, duracion) VALUES ('" . $_GET['obras'] . "', '" . $_GET['tematica'] . "','" . $_GET['duracion'] . "')";

                $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
            }
            break;
        case 'insertarActividad':
            if (isset($_GET['nombreActividad'])) {
                $sql = "INSERT INTO actividades(nombreActividad) VALUES ('" . $_GET['nombreActividad'] . "')";

                $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
            }
            break;

        case 'insertarTurno':
            if (isset($_GET['id_usuario']) && isset($_GET['id_recorrido'])) {
                $sql = "INSERT INTO turnos(id_usuario, id_recorrido) VALUES (" . $_GET['id_usuario'] . ", " . $_GET['id_recorrido'] . ")";

                $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
            }
            break;

        case 'agregarRegistros':

            if (isset($_GET['nombre']) && isset($_GET['apellido']) && isset($_GET['telefono']) && isset($_GET['mail']) && isset($_GET['password'])) {

                $nombre = trim($_GET['nombre']);
                $apellido = trim($_GET['apellido']);
                $telefono = trim($_GET['telefono']);
                $mail = trim($_GET['mail']);
                $password = md5(trim($_GET['password']));

                if ($nombre == NULL || $nombre == "") {

                    echo false;
                }
                if ($apellido == NULL || $apellido == "") {

                    echo false;
                }
                if ($telefono == NULL || $telefono == "") {

                    echo false;
                }
                if ($mail == NULL || $mail == "") {

                    echo false;

                }if ($password == NULL || $password == "") {

                    echo false;

                } else {

                    $sql = "INSERT INTO usuarios(nombre, apellido, telefono, mail, password) 
                        VALUES('$nombre', '$apellido', '$telefono', '$mail', '$password')";
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                    echo true;
                }
            }
            break;

        case 'login':

            if (isset($_GET['mail']) && isset($_GET['password'])) {

                $mail = $_GET['mail'];
                $password = md5($_GET['password']);

                $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE mail = '$mail' 
                and password = '$password'");

                if (mysqli_num_rows($validar_login) > 0){

                    if ($row = $validar_login->fetch_assoc()) {
                            echo $row['nombre'];
                    }


                }else{

                    echo false;

                }

            }


    }
}
