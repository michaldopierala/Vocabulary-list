const btnTwist= document.getElementById('twist');

let twistState = false;

btnTwist.addEventListener('click', useTwist);

console.log(tabe_db); 

function useTwist() {
    twistState = !twistState; 
    btnTwist.style.backgroundColor = twistState ? 'pink' : 'white'; 
    btnTwist.style.color='black';




    if(twistState){
        //modifay table variable and update display 
        for(let x in tabe_db){
           let temp = tabe_db[x].newword;
           tabe_db[x].newword = tabe_db[x].transl;
           tabe_db[x].transl= temp; 
           tabe_db[x].score= 0;
        }
        console.log(tabe_db); 
         column_1 = "Translation";  // column description
         column_2 = "Word";  // column description 
         column_score = "Score (Twist)"; 
        displayTable();


    }else{
        // get table from DB and update display
        xhttp.open("GET", "db/get_table.php");
        xhttp.send();
        column_1 = "Word"; 
        column_2 = "Translation"; 
        column_score = "Score"; 
        displayTable();


       

          console.log(window.history);
         
    }







console.log('test');
}

