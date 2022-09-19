function empezar_obtenerCantidadTurnosTomados(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=" + document.getElementById("id_recorrido").value;
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
      let parseado=JSON.parse(ajax.responseText);
        
        console.log(parseado);
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarObtenerRecorridos(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=obtenerRecorridos";
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
      let parseado=JSON.parse(ajax.responseText);

        console.log(parseado);
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarObtenerTurnosUsuario(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=obtenerTurnosUsuario&id_usuario=" + document.getElementById("id_usuario").value;
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
      let parseado=JSON.parse(ajax.responseText);

        console.log(parseado);
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarObtenerTurnosDisponibles(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=obtenerTurnosDisponibles";
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
      let parseado=JSON.parse(ajax.responseText);

        console.log(parseado);
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarInsertarRecorrido(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=insertarRecorrido&obras=" + document.getElementById("obras").value + "&tematica=" + 
    document.getElementById("tematica").value + "&duracion=" + document.getElementById("duracion").value;
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
        
        console.log("consulta exitosa");
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarInsertarActividad(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=insertarActividad&nombre_actividad=" + document.getElementById("nombreActividad").value;
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){

      console.log("consulta exitosa");
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarInsertarTurno(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=insertarTurno&id_usuario=" + document.getElementById("id_usuario").value + "&id_recorrido=" + 
    document.getElementById("id_recorrido").value;
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){

        console.log("consulta exitosa");
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarAgregarRegistros(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=agregarRegistros&nombre="+ "dsadasasas" + "&apellido=" + 
    "lopez" + "&telefono=" + "sadsadasdasdasdasdasd" + "&mail=" + 
    "lopez@gmfsdf.com" +  "&password=" + "gfsdgdghdfhdfhhdfdfh";
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
      let res = ajax.responseText;

        console.log(res);
    }
    
    function mostrarError(){
        console.log("error");
    }
 } 

 function empezarLogin(){
    let ajax=new XMLHttpRequest();
    let metodo="GET";
    let url="https://www.olimpiadaset32.000webhostapp.com/index.php?consulta=login&mail=" + "lucas@gmail.com" + "&password=" + 
    "12345";
    ajax.open(metodo,url);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);
    ajax.addEventListener("error",mostrarError);

    function mostrarDatos(){
      let res = ajax.responseText;

        console.log(res);

      if(res){
        
        let ajax=new XMLHttpRequest();
        let metodo="GET";
        let url="session.php?nombre=" + res;
        ajax.open(metodo,url);
        ajax.send();
        ajax.addEventListener("load",mostrarNombre);
        ajax.addEventListener("error",mostrarError);

        function mostrarNombre(){

          let nombreUsuario = ajax.responseText;

          console.log(nombreUsuario);

        }

      }

    }
    
    function mostrarError(){
        console.log("error");
    }
 } 






 
 
 

