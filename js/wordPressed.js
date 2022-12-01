//   Disply transletion and ratting button after pressing word  
function display(ev){
    id = ev.value;
    let check_if_active = ev.parentNode.parentNode.children[1].innerText; // this gets a text from second column
    
    if(check_if_active.length==0){ 
    for(let x in tabe_db){
      if(tabe_db[x].id==id){
        tabe_iter = x; 
      }
    }
    
      let showword = tabe_db[tabe_iter].transl;
      let score = tabe_db[tabe_iter].score;
      let ele = ev.parentElement.parentElement;
      ele.children[1].innerText = showword;
      ele.children[2].innerHTML="<button onclick='score(this)' value='"+id+"'>bad</button><button onclick='score(this)' value='"+id+"'>good</button>";
      ele.children[3].innerHTML= Math.round((score[0]/score[1])*100)+"% ("+score[0]+"/"+score[1]+")";
      if (screen>650) {
      ele.children[4].innerHTML="<button onclick='remove(this)'>Delete</button><button onclick='update(this)' value= '"+id+"'>Update</button>";
      }
    }
    }



    //  mark scorring action in tabe_db
function score(ev){
    const element = ev.parentElement.parentElement;
    for (let x in tabe_db) {
      if(tabe_db[x].id==ev.value){
        if (ev.innerText == "good") {
          tabe_db[x].state="good";
          element.style.backgroundColor = "rgb(0, 128, 0)";
        }else if(ev.innerText == "bad"){
          tabe_db[x].state="bad";
          element.style.backgroundColor = "rgb(255, 102, 102)";
        }
      }
  }
  
  
  
  // update score in data base 
    const xhttp2 = new XMLHttpRequest();
  
    xhttp.onload = function() {
    let response = JSON.parse(this.responseText); 
    
    if(ev.innerText == "good"){
      element.children[3].innerText=Math.round((response[0]/response[1])*100)+"% ("+response[0]+"/"+response[1]+")";
      ev.parentElement.innerHTML="";
    }else if(ev.innerText == "bad"){
      element.children[3].innerText= Math.round((response[0]/response[1])*100)+"% ("+response[0]+"/"+response[1]+")";
      ev.parentElement.innerHTML="";
    }
  }
  // Send a request
  xhttp.open("GET", "db/score.php?id="+id+"&value="+ev.innerText);
  xhttp.send();
  }