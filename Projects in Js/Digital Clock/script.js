const selectClock=document.querySelector('#clock')//can also use document.getElementById('#clock')
// console.log(selectClock);
const result=setInterval(function(){
  let date=new Date();
  selectClock.innerHTML= date.toLocaleTimeString();
},1000);
// clearInterval(result);//Use to stop the setInterval, which keeps on executing continuously


/*
setInterval() in JavaScript is a built-in function that repeatedly executes a specified function or piece of code at a defined time
interval (in milliseconds). It keeps running the specified code at the given interval until it is explicitly stopped using 
clearInterval().
Syntax:
setInterval(function, delayInMilliseconds);
*/