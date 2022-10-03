<?php 

$id =$_GET['id'];
$v =$_GET['value'];

// DATABASE 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vocabulary";

// connect to DB
$connection = mysqli_connect($servername,$username,$password );
$db = mysqli_select_db($connection,$dbname) ;


// Send MySQL request and recive result 
$sql = "SELECT  score FROM MyGuests WHERE id=$id ";
$result = mysqli_query($connection,$sql);
echo $result;
//$result =json decode($result);

//$result[1] =$result[1]++;







?>
