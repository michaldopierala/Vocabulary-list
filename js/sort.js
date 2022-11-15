// set button's backgroundcolor to default
const btn_ch = document.getElementById('row2').children;
function clear_btn() {
   for (let i = 0; i < btn_ch.length; i++) {
    btn_ch[i].style.backgroundColor="white";  
}}



//event listeners
document.getElementById('sort_best').addEventListener('click', best);
document.getElementById('sort_worst').addEventListener('click', worst);
document.getElementById('sort_random').addEventListener('click', random);
document.getElementById('sort_newest').addEventListener('click', newest);
document.getElementById('sort_oldest').addEventListener('click', oldest);
document.getElementById('sort_alphabet').addEventListener('click', alphabet);


//sort worst first
function best(){
  clear_btn()
  document.getElementById('sort_best').style.backgroundColor="rgb(190,190,190)";
  tabe_db.sort((a, b) => (b.score[0]/b.score[1])-(a.score[0]/a.score[1]) );
    displayTable();
}

//sort best first 
function worst(){
  clear_btn()
  document.getElementById('sort_worst').style.backgroundColor="rgb(190,190,190)";
  tabe_db.sort((a, b) => (a.score[0]/a.score[1]) - (b.score[0]/b.score[1]));  
  displayTable();
}


// sort random
function random() {
  clear_btn()
  document.getElementById('sort_random').style.backgroundColor="rgb(190,190,190)";
  let l = tabe_db.length;
  let tb_temp=[];
  let random; 
for (let i = 0; i < l; i++) {
  random=Math.floor(Math.random()*(i+1));
  tb_temp.splice(random, 0, tabe_db.pop() );
 }
  tabe_db=tb_temp;
  displayTable();
}

//sort  newest
function newest(){
  clear_btn()
  document.getElementById('sort_newest').style.backgroundColor="rgb(190,190,190)";
  tabe_db.sort((a, b) => b.id-a.id);
  
  displayTable();
}

//sort  oldest
function oldest(){
  clear_btn()
  document.getElementById('sort_oldest').style.backgroundColor="rgb(190,190,190)";
  tabe_db.sort((a, b) => a.id - b.id);  
  displayTable();
}

//sort alphabet
function alphabet(){
  console.log(tabe_db);
  clear_btn()
  document.getElementById('sort_alphabet').style.backgroundColor="rgb(190,190,190)";  
for (let i = 0; i < tabe_db.length-1; i++) {
  for (let x = 0; x < tabe_db.length-1; x++) {
  
  if(tabe_db[x]['newword'].localeCompare(tabe_db[x+1]['newword'])==1){
    let temp = tabe_db[x]; 
    tabe_db[x]=tabe_db[x+1];
    tabe_db[x+1]=temp; 
  }   
}
}
  displayTable();
}


//  Display new table order after sorting function 
function displayTable() {
  let table ="<div class='tb'><div><div>"+ column_1 +"</div></div> <div>"+ column_2 +"</div> <div></div><div>Score</div><div></div>" +"</div>";
  for (let x in tabe_db) {
    table = table + "<div class='tb'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div id='te22'></div> <div></div><div></div><div></div>" +"</div>";
    document.getElementById("row3").innerHTML=table;
  }
  console.log();
}