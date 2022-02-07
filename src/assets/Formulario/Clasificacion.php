<!DOCTYPE html>
<html>
<head>
<title>Table with database</title>
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
<style>
table {
    border-collapse: collapse;
    width: 250px;
    color: #2D427B;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    text-align: center;
    background-color: #ffffff;
}
	td{
    font-size: 14px;
    padding-top: 7px;
    padding-bottom: 4px;
    color: #01558C;
    padding-left: 8px;
	}
th {
    background-color: #01558C;
    color: white;
    padding-top: 7px;
    padding-bottom: 4px;
}
tr:nth-child(even) {background-color: #f2f2f2}
</style>
</head>
<body>
<table>
<tr>
<th></th>
<th>Nombre</th>
<th>Puntaje</th>
</tr>
<?php
	$conn = mysqli_connect("sql302.epizy.com", "epiz_25941133", "tRLt81CQFAI", "epiz_25941133_PurebaFormulario");
	// Check connection
	if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM Puntaje ORDER BY Puntaje DESC LIMIT 9";
	$pos = 1;
	$result = $conn->query($sql);
	$cantidad = $result->num_rows;
	if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
	echo "<tr><td> $pos </td><td>" . $row["Nombre"] . "</td><td>"
	. $row["Puntaje"]. "</td></tr>";
		$pos++;
	}
	//echo "</table>";
	}
	
	$sql = "SELECT * FROM Puntaje ORDER BY id DESC LIMIT 1";
	$NombreJugador;
	$PuntajeJugador;
	//$IdJugador;
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$NombreJugador = $row["Nombre"];
			$PuntajeJugador = $row["Puntaje"];
			$IdJugador = $row["id"];
		}
	}
	
	$sql = "SELECT * FROM Puntaje ORDER BY Puntaje DESC LIMIT $cantidad";
	$jugador=0;
	$Posicion=0;
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$jugador++;
			if($row["Nombre"] == $NombreJugador && $row["Puntaje"] == $PuntajeJugador /*&& $row["id"] == $IdJugador*/){$Posicion=$jugador;}
		}
	}
	
	echo "<tr><td><b>" . $Posicion . "</b></td><td><b>" . $NombreJugador . "</b></td><td><b>"
	. $PuntajeJugador. "</b></td></tr>";
	
	$conn->close();
	?>
</table>
</body>
</html>