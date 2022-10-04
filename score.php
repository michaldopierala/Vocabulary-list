<?php 

//$id =$_GET['id'];
//$v =$_GET['value'];
$id = 5; 

// DATABASE 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vocabulary";

// connect to DB
$connection = mysqli_connect($servername,$username,$password );
$db = mysqli_select_db($connection,$dbname) ;


// Send MySQL request and recive result 
$sql = "SELECT newword FROM vocabulary_table WHERE id='5'";
$result = mysqli_query($connection,$sql);
$row = mysqli_fetch_assoc($result);



//$result[1] =$result[1]++;


//var_dump($row["newword"]);

//echo json_encode($result);
//echo $v; 

// send JSON
echo json_encode($row);
//echo "test";

?>
