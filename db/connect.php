<?php 

 // DATABASE 
 $servername = "localhost";
 $username = "root";
 $password = "";
 $dbname = "vocabulary";
 
 // connect to DB
 $connection = mysqli_connect($servername,$username,$password );
 $db = mysqli_select_db($connection,$dbname);

?>