// get current time stamp 

let wordsTotal; 
let wordsPerWeek;
const statsModal = document.getElementById('stats_modal');
const statsShow = document.getElementById('stats_content');
const closeStats = document.getElementById('closeStats');
const btnStats = document.getElementById('stats');
let statsText; 

btnStats.addEventListener('click', ()=>{statsModal.style.display="block"});
closeStats.addEventListener('click', ()=>{statsModal.style.display="none"});



// this function is called inside AJAX in load_tb.js after the tabe_db array is downloaded from DB 
function stats(){
    console.log(tabe_db);
    let counterW = 0;
    let countM = 0; 

    let timestamp = Math.floor(Date.now() / 1000);
    let pastWeek = timestamp-(60*60*24*7);
    let pastMonth = timestamp-(60*60*24*7*30);

    wordsTotal = tabe_db.length;
    statsText= "Total numer of words: "+wordsTotal+"<br><br>";



    for (let x in tabe_db) {
        if (tabe_db[x].time>pastWeek) {
            counterW++;
        }
        if (tabe_db[x].time>pastMonth) {
            countM++;
        }
    }


    statsText+= "Number of words in the last week: "+ counterW+"<br><br>";
    statsText+= "number of words in the last month: "+countM+"<br><br>"; 

    statsShow.innerHTML = statsText; 

}

