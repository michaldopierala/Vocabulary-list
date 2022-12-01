//  Modal box for deleting word
let ele;
document.getElementById("yes_delete").addEventListener("click", remove_yes);
document.getElementById("no_delete").addEventListener("click", remove_no);

//show modal box with delate function
function remove(ev){
  ele=ev.parentElement.parentElement;
  document.getElementById("modal_box").style.display="block";
}
// delate word from data base
function remove_yes(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
  ele.style.display = "none";
  document.getElementById("modal_box").style.display="none";
  }
  xhttp.open("GET", "db/delete.php?id="+id);
  xhttp.send(); 
}

// NO delate & close modal 
function remove_no(){
  document.getElementById("modal_box").style.display="none";
}