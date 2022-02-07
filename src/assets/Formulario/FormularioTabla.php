
   <?php

        $Nombre=$_POST['Nombre'];
        $Puntaje=$_POST['Puntaje'];
        $Tiempo=$_POST['Tiempo'];
        
               $conn = new mysqli("localhost", "PorvenirUserGameClever", "Vwt1NTxP9ZvZVKtz", "Porvenir_ABCparaCamellar");

        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
         }

         $sql = "INSERT INTO Puntaje (Nombre, Puntaje, Tiempo)
         VALUES ('$Nombre', '$Puntaje', '$Tiempo')";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
           echo "Error: " . $sql . "<br>" . $conn->error;
         }

         $conn->close();
    
?>

