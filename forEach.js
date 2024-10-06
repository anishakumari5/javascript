//Mostly while dealiing with an array we will use forEach, because it is easy to use one
let myArr=[5,6,7,8,9];//This is how a forEach is used with an array, remember it's a predefined prototype
//In forEach we pass a callback function, which is a function without a name
//In the code below an arrow function without a name have been passed, and in the function a parameter needs to be defined
myArr.forEach((item)=>
{
    //console.log(item);//This prints all the elements of an array separately
});

//In the case below a normal function have been used but without any name given to the function (callback)
myArr.forEach(function (item)
{
    //console.log(item);
})

//We can also pass a function in forEach
function myFun(item)
{
    //console.log(item);
}

myArr.forEach(myFun); //This also prints the element of an array separately.
//Remember to only pass the reference of the function in above forEach, and not it's execution

/*It is not that only one parameter can be passed in the callback function of forEach, we can access, 
indes of the array, the element of the array, and the entire array by passing multiple parameters*/

myArr.forEach((value,index, arry)=>
{
    //First it will print the value of the elements, then indes, then the entire array with which forEach is initialized
    //console.log(value,index,arry);
})

//Let's say there is an array which consists of multiple objects within it, forEach loop can be used there too

const newArr=[
    {
        name:"Anisha",
        age:23
    },
    {
        name:"Muskan",
        age:21
    },
    {
        name:"Nisha",
        age:20
    },
];

newArr.forEach((item)=>{
    //console.log(item.name);//Gives name of all the objects in the array
})


//Let us try to store the forEach loop in a variable
const myString="Hi, it's Anisha"; //forEach cannot be used with strings, unless it is converted to an array
const myArray=[5,9,8,7,6];

const newVal=myArray.forEach((item)=>{
    console.log(item);
})

console.log(newVal); //This will return the elements of the array because of the above forEach loop, but returns undefined too

const newVal1=myArray.forEach((item)=>{
    console.log(item);
    return item;
    //When newVal1 is printed it will return the elements of the array together with undefined
})

const newVal2=myArray.forEach((item)=>{
    return item;
    //This will basically return undefined
})
//THerefore it is important to note that forEach returns undefined and not any particular value