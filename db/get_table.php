<?php 

//connect to data base
require 'connect.php';


// Send MySQL request and recive result 
$sql = "SELECT * FROM vocabulary_table";
$result = mysqli_query($connection,$sql);


// create array with the results from DB 
$arr = array();
while($row = mysqli_fetch_assoc($result)) {
  $row["score"]= json_decode($row["score"]); // convert score from string to array 
  $row["state"] = 0; 
  array_push($arr,$row);
}


// send JSON
echo json_encode($arr);
?>