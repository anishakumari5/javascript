//When functions are declared normally
//In this case the function can easily be accessed before the declaration of the function
console.log(myFunction());
function myFunction()
{
    return "Hi, this is myFunction()";
}


//When function is declared in the form of a variable
//In this case the function is declared in the form of a variable, MyNewFunction, and variables cannot be accessed before it's declaration, so it gives an error.
console.log(MyNewFunction);
const MyNewFunction=function newFunction()
{
    return "Hello, this is newFunction()";
}