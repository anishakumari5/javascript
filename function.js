//Functions are the piece of codes that are basically used to wrap codes in a a sequence of commands that can be reused together later in a program
//Functions are defined by using the "function" keyword and then a name of choice along with parenthesis();
function myFunction(userName) //When a function is defined the keyword used within the parenthesis are called as parameters
{
    if(!userName) //Similar to userName===undefined
    {
        return "Enter a valid name";
    }
    return `${userName} has just logged in.`;
}

//Thus a function prevents the user to write long chuncks of code, everytime they want.
// console.log(myFunction("Anisha")); //When a function is caleed the keyword used in parenthesis is called as an Argument

//If you want to pass a default value to the function, it's an easy task, you need to do it during the initialization of the function

// function myFunction(userName="Default")  //Default value passed to the userName
// {
//     if(!userName) //Similar to userName===undefined
//     {
        //WHen the default value have been initialized, there won't be athe execution of the above if block, because userName always exists.
//         return "Enter a valid name";
//     }
//     return `${userName} has just logged in.`;
// }
// console.log(myFunction()); //No parameters have been passed, and the function returns "Default has just logged in.", as the output

/*Let us say we re creating an e-commerce site and the user wants to add the items to the shopping cart, in this case the total number of 
required by the user is unknown, so here we use the rest (...) operator.
Remember: est operator passses the elements in the form of an array, you can use the array operations like loops to calculate result as required.
*/
//Thus rest operator is used in the function as a parameter where the total number of arguments is unknown
function calculateResult(item) //Only one argument passed as parameter
{
    return item;
}

console.log(calculateResult(100,200,300,400,500,600)); //Will return only one value, i.e. the first value (100)


function calculate(...item) //Here, rest operator have been used in the function as a parameter, so it can take any number of arguments passed by user.
{
    return item;
}

console.log(calculate(100,200,300,400,500,600)); //This will basically pass these elements in the form of an array.

function passNumbs(num1, num2, ...num) //Rest operator have been used with num
{
    return num; //In this case it will only return the values in the num(rest operator)
}

console.log(passNumbs(100,200,300,400,500,600)); //This will ignore the first two values as they are num1, and num2 respectively, but num will give the output as: [300,400,500,600]

//Objects can also be passed in the function parameter, to print the result accordingly.

const myObject={
    name:"Anisha",
    age:23
}

function myFunction(currentObject) //Here currentObject can be the name of any object that a user required to pass in the function.
{
    return `Hello, I am ${currentObject.name} and I am ${currentObject.age} year old.` //Tales the name and the age property from the object
}

console.log(myFunction(myObject)); //Here, myObject is passed as the argument to the function, thus takes the value of name and age from it.

//One can also pass the object as an argument directly.
//In this case an object have been passed in the argument.
console.log(myFunction({
    name:"Muskan",
    age:21
}));

//Arrays can also be passed as an argument in a function
const myArray=[100,200,300,400];

function newFunc(currentArray)
{
    return currentArray[2];
}

console.log(newFunc(myArray));

//Arrays can also be passed directly in the form of an argument in a function
console.log(newFunc([50,40,60,80]));

