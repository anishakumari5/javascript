const form=document.querySelector('form')
//In case of the form, we need to select the from first because it takes input from the user and we need to extract the value from it
// const height=parseInt(document.querySelector('#height').value)
// const weight=parseInt(document.querySelector('#weight').value)

/*Please remember the value of height and weight cannot be taken above the form, because it will take the value when the form is 
reloaded, that is nan value in this case.*/

/*An event listener on form is important, which is of submit type, and not of onclick type, because the form is submitted when 
the button is clicked*/
form.addEventListener('submit',function(e){
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
  /*The preventDefault() method in JavaScript is used to stop the default behavior of an event from happening. This is commonly 
  used when handling events like form submissions, anchor tags, or button clicks, where you want to override the browser's default 
  action.
  For example, in form submission, the default action is to submit the form and reload the page. If you want to handle the submission 
  using JavaScript (e.g., validate input or send data via AJAX), you use preventDefault() to stop the page from reloading.*/
  e.preventDefault();
  const result=document.querySelector('#results')//Selects the div element with id results
  if(height==="" || height<0||isNaN(height) || weight===""||weight<0||isNaN(weight)){
    //The if statement is basically used to check the condition that a valid height and weight is provided by the user
    result.innerHTML=`Please input a valid height or weight.${height} ${weight}` //Pushes the result when form is submitted
  }
  else{
    const final=(weight*10000/(height*height)).toFixed(2);
    if(final<18.6)
    {
        result.innerHTML=`Under Weight <span>${final}</span>`
    }
    else if(final>=18.6 && final<=24.9)
    {
        result.innerHTML=`Normal Range <span>${final}</span>`
    }
    else{
        result.innerHTML=`Over Weight <span>${final}</span>`
    }
    //This basically pushes the result when the input provided by the user is valid and displays the result
  }
})