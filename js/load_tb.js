// GET TABLE FROM THE SERVER AND DISPLAY IT ON THE PAGE
// THIS IS THE FIRST TASK WHICH MUST BE DONE AFTER OPENNING WEBPAGE 

// global variables 
let tabe_db = [];
let id;
let tabe_iter; // iteration of elements on the page 
let column_1 = "Word";  // column description
let column_2 = "Translation";  // column description
let column_score = "score"; 


// AJAX
const xhttp = new XMLHttpRequest();

// Recive JSON and convert to object 
 xhttp.onload = function () {
  console.log('recived'); 
  tabe_db = JSON.parse(this.responseText);

// function display table with vocabulary on the webpage.  
let table ="<div class='tb'><div><div>"+ column_1 +"</div></div> <div>"+ column_2 +"</div> <div></div><div>"+column_score+"</div><div></div>" +"</div>";
for (let x in tabe_db) {
  table = table + "<div class='tb'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div></div> <div></div><div></div><div></div>" +"</div>";
  document.getElementById("row3").innerHTML=table;
}
stats();
}

// Send a request
xhttp.open("GET", "db/get_table.php");
xhttp.send();