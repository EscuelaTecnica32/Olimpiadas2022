<?php

    include('conexion.php');

    $consulta = $_GET['consulta'];
    if($consulta){
        switch ($consulta) {
            case 'obtenerCantidadTurnosTomados':
                if(isset($_POST['id_recorrido'])){
                    $sql = "SELECT count(*) as cant from turnos where id_recorrido = ".$_POST['id_recorrido'];
    
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                    $json = array();
                    while ($row = $query->fetch_assoc()){
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
                while ($row = $query->fetch_assoc()){
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
                if(isset($_POST['id_usuario'])){
                    $sql = "SELECT * from turnos where id_usuario = " . $_POST['id_usuario'];
    
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                    $json = array();
                    while ($row = $query->fetch_assoc()){
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
                while ($row = $query->fetch_assoc()){
                    $json[] = array(
                        "id" => $row['id'],
                        "id_usuario" => $row['id_usuario'],
                        "id_recorrido" => $row['id_recorrido']
                    );
                }
                echo json_encode($json);
                break;
            case 'insertarRecorrido':
                if(isset($_POST['obras']) && isset($_POST['tematica']) && isset($_POST['duracion'])){
                    $sql = "INSERT INTO recorrido(obras, tematica, duracion) VALUES ('".$_POST['obras']."', '".$_POST['tematica']."','".$_POST['duracion']."')";
    
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                }
                break;
            case 'insertarActividad':
                if(isset($_POST['nombreActividad'])){
                    $sql = "INSERT INTO actividades(nombreActividad) VALUES ('".$_POST['nombreActividad']."')";
    
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                }
                break;
            case 'insertarUsuario':
                if(isset($_POST['nombre'])){
                    $sql = "INSERT INTO usuarios(nombre) VALUES ('".$_POST['nombre']."')";
    
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                }
                break;
            case 'insertarTurno':
                if(isset($_POST['id_usuario']) && isset($_POST['id_recorrido'])){
                    $sql = "INSERT INTO turnos(id_usuario, id_recorrido) VALUES (".$_POST['id_usuario'].", ".$_POST['id_recorrido'].")";
    
                    $query = $conexion->query($sql) or die($query . mysqli_error($conexion));
                }
                break;
        }
    }

?>