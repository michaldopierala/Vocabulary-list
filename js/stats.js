// get current time stamp 






// this function is called inside AJAX in load_tb.js after the tabe_db array is downloaded from DB 
function stats(){
    console.log('this is call me latter function ');
    let timestamp = Math.floor(Date.now() / 1000);

    console.log(tabe_db);
    console.log('time now'+timestamp);
    let pastWeek = timestamp-(60*60*24*7);
    let pastMonth = timestamp-(60*60*24*7*30);
    console.log(pastWeek);

    let counterW = 0;
    let countM = 0;  
    for (let x in tabe_db) {
        console.log(tabe_db[x].time);

        if (tabe_db[x].time>pastWeek) {

            counterW++;
        }
        if (tabe_db[x].time>pastMonth) {
            countM++;
        }
    
    }
    console.log('this is nr of words in last week:'+counterW);
    console.log('this is nr of words in last month:'+countM);

    
}


// for(let x in tabe_db){
    // if (tabe_db[x].time>pastWeek) {
    //     countLastWeek++;        
    // }
// }