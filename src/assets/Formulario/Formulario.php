<?php

if(isset($_POST["loginButton"])){

        $Nombre = $_POST["Nombre"];
        $Apellido = $_POST["Apellido"];
        $Edad = $_POST["Edad"];
        $Correo = $_POST["Correo"];

        echo "Welcome " . $Nombre . $Apellido . $Edad . $Correo;

        $conn = new mysqli("localhost", "id13946251_prueba", "3w&&MNJea8$1v-5G", "id13946251_pruebaphaser");

        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
         }

         $sql = "INSERT INTO Probando (Nombre, Apellido, Edad, Correo)
         VALUES ('$Nombre', '$Apellido', '$Edad', '$Correo')";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
           echo "Error: " . $sql . "<br>" . $conn->error;
         }

         $conn->close();
    }
?>

<!doctype html> 
<html lang="es"> 
<head> 
    <meta charset="UTF-8" />
    <title>¿Quien quiere ser financiero?</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <style>
        .container{
    width: 414px;
    height: 400px;
    background-color: hsla(0,0%,100%,1.00);
    padding-left: 40px;
    padding-top: 36px;
    border-radius: 10px;
        }
    
.loginButton {
    -moz-box-shadow: 0px 1px 2px 5px #e8e8e8;
    -webkit-box-shadow: 0px 1px 2px 5px #e8e8e8;
    box-shadow: 0px 1px 2px 5px #e8e8e8;
    background-color: #01548c;
    -webkit-border-top-left-radius: 5px;
    -moz-border-radius-topleft: 5px;
    border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topright: 5px;
    border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-left-radius: 5px;
    text-indent: 0;
    border: 1px solid #014268;
    display: inline-block;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    height: 44px;
    line-height: 44px;
    width: 158px;
    text-decoration: none;
    text-align: center;
    text-shadow: 0px 1px 0px #528ecc;
    margin-left: 79px;
    margin-top: 3px;
}.loginButton:hover {
    background-color:#00466b;
}.loginButton:active {
    position:relative;
    top:1px;
}
    </style>
    <script>
    function submit_form()
    {

        var data1=$("#Nombre").val();
        var data2=$("#Apellido").val();
        var data3=$("#Edad").val();
        var data4=$("#Correo").val();
    }

    </script>
</head>
    
<body>
    <div id="Ingreso">

        <div class="container">
        <form action="" method="post">
            
            <input name="Nombre" type="text" class="w3-input w3-animate-input" id="Nombre" placeholder="Nombre" style="width:30%; max-width:89%" required><br>

            <input name="Apellido" type="text" class="w3-input w3-animate-input" id="Apellido" placeholder="Apellido" style="width:30%; max-width:89%" required><br>
            
            <input type="text" placeholder="Edad" class="w3-input w3-animate-input" id="Edad" name="Edad" style="width:30%; max-width:89%" required><br>
            
            <input type="text" placeholder="Correo" class="w3-input w3-animate-input" id="Correo" name="Correo" style="width:30%; max-width:89%" required><br>
            
            <input type="checkbox" class="w3-check" id="Terminos" name="Terminos" required>
            <label for="Terminos" class="Titulos">Al hacer click autorizo el <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/feed/subscriptions">uso de datos</a></label><br><br>
        
            <input type="button" onclick="submit_form();" value="CONTINUAR" class="loginButton" name="loginButton">
                
        </form>

        </div>
    </div>
</body>
</html>