// For loop is one of a kind of the loop
/*In the condition of for loop, Since const cannot be changed once initialized, this will throw error if 
i is initialized using the const keyword, so better to initialize with let keyword*/
for (let i = 0; i < 10; i++) {
    let element = i;
    //console.log(element);
    if(element==5)
    {
        //console.log("5 have been detected");
        break; //This will break the loop, after 5 is printed, and will end the program
        //continue; //Whereas continue on the other hand will run the program till the logic prevails, that is i is less then 10
    }
}

//while loop
//This is the syntax for while loop
// while (condition) {
    
// }
let numb=1; //Remember since const cannot be changed after being initialized, here numb will not be assigned with const, it will give error
while(numb<=10)
{
    //console.log(numb);
    numb++;
}

//do-while loop
//This block will execute the do loop first and would check the condition afterwards
//Syntax:
// do {
    
// } while (condition);

//Example:
let numb1=2;
do {
    //console.log(`The value is ${numb1}`);
    numb1++;
} while (numb1<=10);


//Some other kind of loops
//For of loop -> They are basically Array specific loop
//Syntax
// for (const element of object) {
    //Here element can ne named anything and object is the object type where we want to initialize the loop to
// }

const myArray=[1,2,3,4,5]

for (const item of myArray) /*Iterates through each element of the array*/ {
    //console.log(item); //This will print the loop like the for loop, each element of the array
}

//Now let us use for in loop in an array, and see the result
for (const key in myArray) {
    //console.log(key);//This gives the value in the form of index, as 0,1,2,3,4
    //Thus the value of the element present at the index can be accessed by mrrayName[index] as it is done
    //console.log(myArray[key]);
}

//The for of loop can also be used on a string
const myString ="Hi! My name is Anisha";
for (const item of myString) /*Iterates through each element of the string*/ {
    //console.log(item); //This will print each character of the array including the spaces
}

//Let us use for in loop in the above string
for (const key in myString) {
    //console.log(key); //This will give the index of the string starting from 0.
    //In order to access the characters of the string just use stringName[index]
    //console.log(myString[key]);
}

//Let us use the for of loop on a map
const myMap = new Map(); //It is also a form of object, so it is defined using the new keyword
myMap.set("Anni",23);
myMap.set("Mussu",21);
myMap.set("John",28);
myMap.set("Nisha",18);
myMap.set("Mussu",21);

for (const order of myMap) {
    //console.log(order); 
    /*This will give the output with key and value of the map together:
[ 'Anni', 23 ]
[ 'Mussu', 21 ]
[ 'John', 28 ]
[ 'Nisha', 18 ] */
}

for (const [key,value] of myMap)
/*Please note that key and value aren't defined values in the js, you can use anything here instead
and value to print the Map.
[key,value] destructures the array*/
{
    //console.log(`${key} : ${value}`);
}

//Now let us use for in loop in the map
for (const key in myMap) {
    console.log(key); //This won't give any output, as for...in loop cannot be accessed in maps 
/*We don't get the desired output using a for...in loop with Maps because the order of iteration
is not guaranteed.
Unlike arrays, which have a specific order based on their indices, Maps are unordered collections. 
This means that the order in which elements are accessed or iterated over is not consistent and may vary.
When you use a for...in loop with a Map, you're iterating over the keys of the Map. 
Since there's no predefined order for the keys, the output will be unpredictable. */
//Can be converted in array and then be accessedwith for..in loop
}

//Let us use for loop on an object

//for (const key of myObject) {
//     console.log(key); //This will generate error since objects are not iterable,unless they implememnt the iterable protocol
// }

//We can make the object iterable by converting it to an array, with the helo of Object.keys or Object.entries
//It is desirable to use Object.entries instead of Object.keys
/*
Object.keys

Returns: An array containing the keys of an object.
Purpose: Used when you need to iterate over the keys of an object, perform operations on the 
keys themselves, or access the values using the keys.
Thus, with these we can only access the key of the object.
*/
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city"]
console.log(person[keys]); //Makes no sense, undefined. ASee the value which wwe get above


/*
Object.entries
Returns: An array of arrays, where each inner array contains a key-value pair from the object.
Purpose: Used when you need to iterate over both the keys and values of an object simultaneously, 
or when you want to create a new object with modified key-value pairs.
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const entries = Object.entries(person);
console.log(entries); // Output: [["name", "Alice"], ["age", 30], ["city", "New York"]]
*/
const myObject={
    name:"Anisha",
    age:23,
    place:"Bihar"
};

for (const item of Object.keys(myObject)) {
    //In this case item is used to get the key of the Object and it's value can then be accessed with the help of dot notation
    //console.log(`${item} : ${myObject.item}`);
}

for (const [item,values] of Object.entries(myObject)) {
    //Thus this is used to print the value of the item and values as required, in form of key and values
    //console.log(`${item} : ${values}`);
}

//The values of keys and value can be accessed through a loop using for in, directly
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
    //The value of the key can be accessed either with the dot notation or with a box notation
}