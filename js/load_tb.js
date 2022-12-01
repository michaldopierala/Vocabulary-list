// GET TABLE FROM THE SERVER AND DISPLAY IT ON THE PAGE
// THIS IS THE FIRST TASK WHICH MUST BE DONE AFTER OPENNING WEBPAGE 

// global variables 
let tabe_db = [];

console.log(tabe_db )
let id;
let tabe_iter; // iteration of elements on the page 
let column_1 = "Word";  // column description
let column_2 = "Translation";  // column description
let column_score = "score"; 
let screen =window.outerWidth;



// AJAX
const xhttp = new XMLHttpRequest();

// Recive JSON and convert to object 
 xhttp.onload = function () {
  console.log('recived'); 
  tabe_db = JSON.parse(this.responseText);

// function display table with vocabulary on the webpage.  


stats();
displayTable();
}

// Send a request
xhttp.open("GET", "db/get_table.php");
xhttp.send();