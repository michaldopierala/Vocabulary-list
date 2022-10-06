<?php 
//connect to data base
require 'connect.php';


 $id =$_GET['id'];


$sql = "DELETE FROM vocabulary_table WHERE id = '$id'";



if (mysqli_query($connection,$sql)) {
  echo "Record updated successfully";
} else {
 echo "Error updating record: " . mysqli_error($connection);
}

// echo $id;
?>