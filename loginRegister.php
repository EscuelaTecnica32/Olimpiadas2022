<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Museo</title>
    <link rel="icon" type="image/png" href="assets/imagenes/favicon.png">

    <link rel="stylesheet" href="assets/estilos/estilos.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

</head>


<body>

    <main>
        <div class="container">

            <div class="caja_trasera">

                <div class = "caja_trasera_login">

                    <h3>¿Ya tenés una cuenta?</h3>
                    <p>Inicia sesión en la página</p>
                    <button id="btn_iniciar_sesion">Iniciar Sesión</button>

                </div>

                <div class = "caja_trasera_register">

                    <h3>¿No tenés una cuenta?</h3>
                    <p>Registrate para iniciar sesión</p>
                    <button id="btn_registrarse">Registrarse</button>

                </div>

            </div>

            <div class="container_login-register">

                <form action="php/login_usuario_be.php" method="POST" class="formulario_login">

                    <h2>Iniciar Sesión</h2>
                    <img class = "logo" src="assets/imagenes/favicona.png" height="30%" width="30%">
                    <input type="text" placeholder="Nombre de Usuario" name="nombre_usuario" required>
                    <input type="password" placeholder="Contraseña" name="password" required>
                    <button>Iniciar Sesión</button>

                </form>

                <form action="php/registro_usuario_be.php" method="POST" class="formulario_register">

                    <h2>Registrarse</h2>
                    <img class = "logo" src="assets/imagenes/favicona.png" height="25%" width="25%">
                    <input type="text" placeholder="Nombre Completo" name="nombre_completo" required>
                    <input type="text" placeholder="Dirección de Email" name="correo_electronico" required>
                    <input type="text" placeholder="Nombre de Usuario" name="nombre_usuario" required>
                    <input type="password" placeholder="Contraseña" name="password" required>
                    <button>Registrarse</button>

                </form>

            </div>

        </div>

    </main>

    <script src="assets\js\script.js"></script>
</body>
</html>