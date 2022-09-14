<?php

    include('conexion.php');

    $consulta = $_GET['consulta'];

    $verify = array();

    if($consulta){

        switch ($consulta) {

            case 'obtenerRecorrido':

                $sql = "SELECT * from recorridos";

                $query = $conexion->query($sql);

                $json = array();

                while ($row = $query->fetch_assoc()){

                    $json[] = array(

                        "id" => $row['id'],
                        "idusuario" => $row['id_usuario']

                    );

                }

                echo json_encode($json);

                break;
            
            case 'agregarRegistros':

                $query = $conexion->query($sql);

                if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['telefono']) && isset($_POST['mail'])){

                    if($_POST['nombre'] == NULL || == "" ){

                        $verify[] = "Debe ingresar  nombre";

                    }if($_POST['apellido'] == NULL || == ""){

                        $verify[] = "Debe ingresar un apellido";

                    }if($_POST['telefono'] == NULL || == ""){

                        $verify[] = "Debe registrar un telefono a su nombre";

                    }if($_POST['mail'] == NULL || == ""){

                        $verify[] = "Debe registrar un correo electronico a su nombre";

                    }else{

                        $sql = "INSERT INTO usuarios(nombre,apellido,telefono,mail) VALUES (nombre, apellido, telefono)";
                        echo "Usted se ha registrado exitosamente";

                    }

                }

                $json = array();

                while ($row = $query->fetch_assoc()){

                    $json[] = array(

                        "idusuario" => $row['id_usuario'],
                        "nombre" => $row["nombreUsuario"],
                        "apellido" => $row["apellidoUsuario"],
                        "telefono" => $row["telefonoUsuario"],
                        "mail" => $row["mailUsuario"],

                    );

                }

                echo json_encode($json);
                break;

        }
    }

?>