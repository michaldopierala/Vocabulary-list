// update words
const modalUpdate = document.getElementById('modal_update');
const closeUpdate = document.getElementById('closeUpdate');
const sendUpdate = document.getElementById('sendUpdate'); 
const updateForm = document.getElementById('updateForm'); 
const updateId = document.getElementById('updateId');

function update(ev) {
  let a = ev.parentNode.parentNode.children[0].children[0].innerText;
  let b = ev.parentNode.parentNode.children[1].innerText;
  console.log(ev.value);
  updateForm.children[1].value = a;
  updateForm.children[3].value = b;
  updateForm.children[4].value = ev.value;

  modalUpdate.style.display= "block";
  sendUpdate.addEventListener('click', ()=>  updateForm.submit() );
}

closeUpdate.addEventListener('click', ()=>{modalUpdate.style.display="none"});