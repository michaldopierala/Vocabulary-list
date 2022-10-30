<?php 
//connect to data base
require 'connect.php';

$new =$_GET['new'];
$tr =$_GET['tr'];
$time = time(); 

$sql = "INSERT INTO vocabulary_table (newword	, transl , time) VALUES ('$new', '$tr', '$time')";


if (mysqli_query($connection,$sql)) {
  echo "Record updated successfully";
} else {
 echo "Error updating record: " . mysqli_error($connection);
}
?>