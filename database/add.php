<?php 
//connect to data base
require 'connect.php';


$sql = "INSERT INTO vocabulary_table (newword	, 	transl)
VALUES ('John', 'Doe')";
mysqli_query($connection,$sql);


?>