<?php 


 // DATABASE 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vocabulary";

// connect to DB
$connection = mysqli_connect($servername,$username,$password );
$db = mysqli_select_db($connection,$dbname);


// Send MySQL request and recive result 
$sql = "SELECT * FROM vocabulary_table";
$result = mysqli_query($connection,$sql);



// create array with the results from DB 
$arr = array();
while($row = mysqli_fetch_assoc($result)) {
  array_push($arr,$row);
}



// send JSON
echo json_encode($arr);
?>