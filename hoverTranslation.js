const hoverTranslation = document.querySelector('#row2 ');//getElementById('row2');// getElementsByClassName('tb');//

console.log(hoverTranslation);
// hoverTranslation.addEventListener('mouseover', showExample );
hoverTranslation.addEventListener('mouseover', showExample );

function showExample(ev){
    alert("Hello! I am an alert box!");
    console.log(this.ev);
}