<?php 
//connect to data base
require 'connect.php';



$id =$_GET['id'];
$v =$_GET['value'];


// Send MySQL request and recive result 
$sql = "SELECT score FROM vocabulary_table WHERE id=$id";
$result = mysqli_query($connection,$sql);
$row = mysqli_fetch_assoc($result);



$arr = json_decode($row["score"]);

//if result is not an array create an empty array 
if(gettype($arr)!='array'){
$arr = [0, 0];
}


// save your score in array 
$arr[1] =$arr[1]+1;
if($v=="good"){
  $arr[0] =$arr[0]+1;
}
$arr=json_encode($arr);

// save result in DB
$sql2 = "UPDATE vocabulary_table SET score='$arr' WHERE id='$id'";

// send request and check status 
if (mysqli_query($connection,$sql2)) {
  //echo "Record updated successfully";
} else {
  echo "Error updating record: " . mysqli_error($connection);
}


echo $arr;

?>
