<?php
//$q = intval($_GET['q']);

//$con = mysqli_connect('localhost','peter','abc123','my_db');

$con = mysqli_connect("localhost", "PorvenirUserGameClever", "Vwt1NTxP9ZvZVKtz", "Porvenir_ABCparaCamellar");

if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
//$sql="SELECT * FROM user WHERE id = '".$q."'";

$sql="SELECT * FROM Puntaje ORDER BY Puntaje DESC LIMIT 3";

$result = mysqli_query($con,$sql);



while($row = mysqli_fetch_array($result)) {
  
  echo $row['Nombre'] . ",";
  echo $row['Puntaje'] . ",";
  
}

mysqli_close($con);
?>