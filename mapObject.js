/*
Maps are basically a type of data type which consists of values in it in the form of key-value pair/
Maps doesn't contains any duplicate element within it.
It remembers the order of insertion
*/

//Here is how a map is defined

const myMap = new Map(); //It is also a form of object, so it is defined using the new keyword
myMap.set("Anni",23);
myMap.set("Mussu",21);
myMap.set("John",28);
myMap.set("Nisha",18);
myMap.set("Mussu",21); //Won't print this, since it is a duplicate value.

console.log(myMap); //Will also remember the order of insertion
