<?php 
//connect to data base
require 'connect.php';



$new =$_GET['new'];
$tr =$_GET['tr'];


$sql = "INSERT INTO vocabulary_table (newword	, transl) VALUES ('$new', '$tr')";



if (mysqli_query($connection,$sql)) {
  echo "Record updated successfully";
} else {
 // echo "Error updating record: " . mysqli_error($connection);
}


?>