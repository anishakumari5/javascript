// const form = document.querySelector("form") 
//We won't be selecting the form tag here because, it takes the input even when the input box is clicled upon
const listenEv =document.querySelector("#subt")
/*So we will take Submit guess as element whose id is subt, in this case it is an input type element, it's not always button but 
can be an element too*/
let value=10; //Here we have taken the value as 10, which is total chance by the user to guess the number
let newArr = new Array();//Here a new array is initialized, that would be required to store the values in Guesses Remaining
//An event listner is added to the button which is in input form, provided with click as parameter, it triggers when a user clicks on it.
/*Remember when an event listner is added to an element it is necessary to provide a parameter of how the event would be triggered 
and a callback function, which carries a parameter.*/
listenEv.addEventListener('click',function(e){
  // console.log("hi");
  e.preventDefault(); //preventDefault is used to prevent the page from reloading
  const randomNum=Math.floor(((Math.random()*100)+1)); //Generates a random function from 1 to 100, a floor function is required
  // const randomNum=10;
  // console.log(randomNum)
  const guessNum=parseInt(document.querySelector('#guessField').value) /*This firstly selects the id that consists of the input field,
   and then the value inside it is changed to an integer, and is stored in a variable called guessNum*/
  const prevGuess=document.querySelector('.guesses'); //This selects the element where the previous guesses would be stored
  const guessCount=document.querySelector('.lastResult'); //THis is uded to select the element where Guess Remaining is stored
  // console.log(guessNum)
  newArr.push(guessNum);//THe integer value that is provided by the user is pused into the array
  // console.log(newArr);
  if(randomNum===guessNum) //Checks if randomNum is strictly equal to the guessNum
  {
    const result=document.querySelector(".lowOrHi");/*Selects the element where the name of the class is lowOrHi and here the output 
    will be displayed when the user guesses the right number*/
    result.innerHTML=`<span>Congratulations!! You guessed the number. </span>${guessNum}` /*The inner html is changed and the result 
    displayed*/
    guessCount.innerHTML=10; //As the user guesses the number the Guess Remaining changes to 10
    newArr.length=0; //The existing array gets deleted
  }
  else{
    //If the random number is not equal to the guessed number, then this statement executes
    if(value===0)//When value reaches 0, of the Guess remaining
    {    
      value=10; //The guess remaining is then restarted with 10
      guessCount.innerHTML=value; //The value id passed to the guessCount variable which stores the total number of guess remaining
      newArr.length=0; //The existing array resets
    }
    guessCount.innerHTML=value; //Here, before the value reaches 0, the value is stored here
    value--; //Value keeps on declining as the input provided by the user and random number doesn't matches
    }
    prevGuess.innerHTML=newArr; /*The existing array is pushed to the prevGuess variable which stores the input provided by the user
     in previous guesses*/
})