<?php
//connect to data base
require 'connect.php';


$new =$_GET['word'];
$tr =$_GET['translatio'];
$updateId = $_GET['updateId'];    

$sql = "UPDATE vocabulary_table SET newword = '$new', transl = '$tr' WHERE id = '$updateId' ";


if (mysqli_query($connection,$sql)) {
    echo "Record updated successfully";
    $url = '../';
    header( "Location: $url" );
 
  } else {
   echo "Error updating record: " . mysqli_error($connection);
  }


// echo "<h2>PHP is Fun!</h2>";
// echo "Hello world!<br>";
// echo "I'm about to learn PHP!<br>";
// echo "This ", "string ", "was ", "made ", "with multiple parameters.";
// echo '<br>';
// echo $new;
// echo '<br>';
// echo $tr;
// echo '<br>';
// echo $updateId;
?>