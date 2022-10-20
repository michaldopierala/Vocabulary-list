// at the beginning make sure that buttons colors are reseted

document.getElementById('sort_best').addEventListener('click', best);
document.getElementById('sort_worst').addEventListener('click', worst);
// document.getElementById('sort_random').addEventListener('click', random);


//sort best first 
function best(){
  tabe_db.sort((a, b) => (a.score[0]/a.score[1]) - (b.score[0]/b.score[1]));
  console.log(tabe_db);
  displayTable();
}

//sort worst first
function worst(){
  tabe_db.sort((a, b) => (b.score[0]/b.score[1])-(a.score[0]/a.score[1]) );
  console.log(tabe_db);
  displayTable();
}

// sort random
// function random() {
  
// }




//  Display table after sorting function 
function displayTable() {
  let table ="";
  for (let x in tabe_db) {
    table = table + "<div class='tb'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div id='te22'></div> <div></div><div></div><div></div>" +"</div>";
    document.getElementById("row3").innerHTML=table;
  }
  console.log('call back function was activated');
}