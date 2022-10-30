// This file change the type of word to be guessed  (The new word first or transletion first )
// second column (newword) is swapped with 3rd column (translation) 

document.getElementById("twist").addEventListener("click", Twist);


 let c1 = "Translation";  
 let c2 = "Word"; 


 const test = {id: '7', newword: 'John', transl: 'Doe', time: '0'}

// console.log(test);



function Twist (){
  // console.log(tabe_db[0]['newword']);
  let temp;

  for (let x in tabe_db){
    temp = tabe_db[x];
    // temp.splice(1,1);
    // console.log(temp);
  }
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // let x= fruits.splice(2, 1);

  
  var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  };
  
    // or delete person["age"];
  console.log(person['age']);
  console.log(person);


}