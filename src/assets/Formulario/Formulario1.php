<!doctype html> 
<html lang="es"> 
<head> 
    <meta charset="UTF-8" />
    <title>¿Quien quiere ser financiero?</title>
</head>
    
<body>
   <?php

        $Nombre=$_POST['Nombre'];
        $Ciudad=$_POST['Ciudad'];

        $conn = new mysqli("localhost", "PorvenirUserGameClever", "Vwt1NTxP9ZvZVKtz", "Porvenir_ABCparaCamellar");

        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
         }

         $sql = "INSERT INTO Datos (Nombre, Ciudad)
         VALUES ('$Nombre', '$Ciudad')";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
           echo "Error: " . $sql . "<br>" . $conn->error;
         }

         $conn->close();
    
    ?>
</body>
</html>