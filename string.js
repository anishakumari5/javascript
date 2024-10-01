const myName=`Anisha`;
const newString=`I am a great person`;
const array1=[1,2,3,4,5];
const age=23;
//String Interpolation, using backtick includes placeholders, such that any variables can be declared 
console.log(`My name is ${myName} and my age is ${age}`);

//Other way to declare the string in the form of an object
const myString = new String('anisha');

console.log(myString.concat(age)); //Concatenates age with myString
console.log(myString.bold()); //Bolds the myString variable, no longer supported
console.log(myString.anchor("Hi")); //Is no longer recommended
console.log(myString.at(3)); //It returns the character or element present at that index
console.log(myString.at(-1)); //Can also be used with negative integers, starts the count from backwards, -1 is last element and - second last and so on
console.log(myString.big()); //No longer supported
console.log(myString.blink()); //No longer supported
console.log(myString.charAt(3)); //Prints the element which is at the position 3
console.log(myString.charCodeAt(1)); //Prints the unicode vale of the character present at the postion specified, undefined converted to 0
//The range for charCodeAt is from 0-65535, covers basics of multillingual plane
console.log(myString.codePointAt(1)); //Prints unicode value of character present at specified position, covers all the unicode points, range is from 0-1114111
console.log(myString.concat(age)); //Adds the elements together
console.log(myString.constructor==String); //checks if myString is an instance of the String constructor.
console.log(newString.endsWith('person')); //determines whether a string ends with the characters of this string, returning true or false as appropriate.
//endsWith(searchString, endPosition) => The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.
console.log(newString.endsWith(`great`,12));
console.log(newString.includes("gre")) //Detemines if the character of strings are included in the original string or not
function checkIncludes(str1, str2){
return `The word ${str2} ${str1.includes(str2)?`do `:`do not `}exists in ${str1}`
}
console.log(checkIncludes(newString,'great'))
console.log(newString.indexOf('great')) //searches this string and returns the index of the first occurrence of the specified substring.(Pehla index of substring)
console.log(newString.isWellFormed()) // returns a boolean indicating whether this string contains any lone surrogates.
console.log(newString.lastIndexOf('great')); //earches this string and returns the index of the last occurrence of the specified substring.
//LastIndexOf more example
const string1=`This is a dog, and the dog is great`;
console.log(string1.lastIndexOf("dog")); //Here index will be searched for the dog occuring seocnd time, first character index
