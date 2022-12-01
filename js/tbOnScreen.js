let table;


function displayTable() {
  let backgroundColor;

    if (screen>650) {
      table ="<div class='tb'><div><div>"+ column_1 +"</div></div> <div>"+ column_2 +"</div> <div></div><div>"+column_score+"</div><div></div></div>";

      for (let x in tabe_db) {
              // check if row was already selected and if yes than put the highlight color. 
        if (tabe_db[x].state=="good"){
          backgroundColor="rgb(0, 128, 0)";
      }else if(tabe_db[x].state=="bad"){
        backgroundColor="rgb(255, 102, 102)";
      }else{
        backgroundColor="none"
      }
      table = table + "<div class='tb' style='background-color:"+backgroundColor+"'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div></div> <div></div><div></div><div></div>" +"</div>";
      document.getElementById("row3").innerHTML=table;
      }   
  }else{
    
        table ="<div class='tb'><div><div>"+ column_1 +"</div></div> <div>"+ column_2 +"</div> <div></div><div>"+column_score+"</div></div>";

        
        // check if row was already selected and if yes than put the highlight color. 
        for (let x in tabe_db) {
          if (tabe_db[x].state=="good"){
              console.log('yesss');
               backgroundColor="rgb(0, 128, 0)";
            }else if(tabe_db[x].state=="bad"){
              backgroundColor="rgb(255, 102, 102)";
            }else{
               backgroundColor="none"
         }
          //add rows to table variable 
           table = table + "<div class='tb' style='background-color:"+backgroundColor+"'><div><button value='"+ tabe_db[x].id+"' onclick='display(this)'>"+ tabe_db[x].newword +"</button></div> <div></div> <div></div><div></div></div>"; 
        }



        document.getElementById("row3").innerHTML=table;
        const phone_tb = document.querySelectorAll('.tb');
        phone_tb.forEach((x)=>{ x.style.gridTemplateColumns = " 1fr 1fr 1fr 1fr"});
  }
}






    

