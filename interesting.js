/*Hoisting is a JavaScript mechanism that moves variable declarations to the top of their respective scopes, 
either function scope or global scope. This means that you can use variables before they are declared, even though 
it's generally not recommended.*/
//Hoisting is not recommended, it isn't a good practice
//When functions are declared normally
//In this case the function can easily be accessed before the declaration of the function
console.log(myFunction()); //In this case hoisting is posible
function myFunction()
{
    return "Hi, this is myFunction()";
}


//When function is declared in the form of a variable
//In this case the function is declared in the form of a variable, MyNewFunction, and variables cannot be accessed before it's declaration, so it gives an error.
console.log(MyNewFunction); //Hoisting doesn't works here
const MyNewFunction=function newFunction()
{
    return "Hello, this is newFunction()";
}
