//IIFE: Immediately Invoked Function Expression
//Basically IIFE is a function that gets immediately executed and invoked, and also this is helpful in preventing the global cope pollution
/*
Once a IIFE is used it cannot be used again, sometimes a function is required to execute only once, and not be
used again in this case IIFE is used.
In JavaScript, polluting the global namespace means introducing too many global variables or functions that 
could conflict with other scripts or parts of the application. 
Also, in this case hoisting is not possible -> accessing something before declaring it.
The syntax of IIFE is as follow:
(function ()
{
})();

(()=>{ //Code })());

(async()=>{ //Code })();
*/
//Let us take an example:
// Global variable
var initData = 'Initializing...';
/* 
The variable initData is declared globally. This means it is accessible from any other script or 
part of the program. If another script or function later defines a global variable with the same name, 
it will overwrite initData, leading to unexpected behavior.*/

function initApp() {
    /*
    Similarly, the function initApp is declared globally. If another script or part of the program 
    later defines a function named initApp, it will override this function, causing the original 
    functionality to break.
    */
    console.log(initData);
    // More initialization code
}

initApp();

// Another script or part of the program
var initData = 'New Initialization';  // This will overwrite the previous initData

// Another script or part of the program
function initApp() {
    console.log('New app initialization');  // This overwrites the previous initApp
}

initApp();  // Now the new function runs instead of the original one, and will return New app initialization in the above function call as well
//So IIFE is used.
(function() {
    var initData = 'Initializing...';
    //In this case the functions have the same name, nut it dpesn't pollutes the global scope as mentioned above
    function initApp() {
        console.log(initData);
        // More initialization code
    }

    initApp();
})(); //Semicolon is must to end an IIFE in order to prevent error, if there is another IIFE being executed

//Name IIFE--> IIFE functions with names
(function Ani()
{
    //Code
})(); //THe function have a name "Ani"

//Unnamed IIFE -> IIFE function without name

(()=>{
    //Code
    })(); //Unnamed IIFE

//IIFE functions can also be parametrized
//Parametrized IIFE
(function (nam/*This is a parameter */){
    console.log(`My name is ${name}`);
})("Anisha"/*This is an argument */) //The last bracket to end an IIFE is used to call the function