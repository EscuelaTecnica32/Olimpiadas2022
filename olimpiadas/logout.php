<?php

@session_start();
session_destroy();
header("location: ../../proyecto/prueba_1.php");

?>