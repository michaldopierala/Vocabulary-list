// if file is created to test change of phone scrren to mobile 




let table;

function displayTable() {
    if (screen>650) {
      table ="<div class='tb'><div><div>"+ column_1 +"</div></div> <div>"+ column_2 +"</div> <div></div><div>"+column_score+"</div><div></div></div>";

      for (let x in tabe_db) {
      table = table + "<div class='tb'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div></div> <div></div><div></div><div></div>" +"</div>";
      document.getElementById("row3").innerHTML=table;
}
    
  }else{
    //  
        table ="<div class='tb'><div><div>"+ column_1 +"</div></div> <div>"+ column_2 +"</div> <div></div><div>"+column_score+"</div></div>";

        for (let x in tabe_db) {
          table = table + "<div class='tb'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div></div> <div></div><div></div></div>"; 
        }

        document.getElementById("row3").innerHTML=table;
        const phone_tb = document.querySelectorAll('.tb');
        phone_tb.forEach((x)=>{ x.style.gridTemplateColumns = " 1fr 1fr 1fr 1fr"});
    
        
  }
}






    

