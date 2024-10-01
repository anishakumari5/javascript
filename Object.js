
// const sym1= Symbol("Anisha");
// const sym2= Symbol("Anisha");
// console.log(sym1===sym2);

// const sym1= Symbol("Ani");
// const obj={
//     name:"Anisha",
//     age:19,
//     isPlacef:false,
//     [sym1]:"mykey",
//     peintHi: function()
//     {
//         return (`Hello, ${this.name}`);
//     }
// };

// console.log(typeof sym1); //Returns type symbol

//In order to change the value of any key in the above object
// obj["age"]=23;
// console.log(obj["age"]);
// console.log(obj.peintHi());
// console.log(obj["peintHi"]());

// 
// obj.greeting=function(){
//     return `Hello, I am ${this.name}`;
// };
// // console.log(obj.greeting());
// console.log(obj.peintHi);

// console.log(obj.greeting);

// const myObj=new Object(); //Declaring object using constructor.
// console.log(myObj);

// const myObj={};
// // const myObj.name="Anisha"; //const, let, var nothing will be used here since object is already defined
// myObj.name="Anisha";
// myObj.age=23;
// myObj.emailId="ajhaanni@gmail.com";

// console.log(myObj);

// const userDetails={
//     userName:{
//         firstName:{
//             first:"Anisha",
//             last:"Kumari"
//         }
//     }
// }
//Below optional chaining have been used '?', which basically prevents error if an object doesn't exist in a nested object
// console.log(userDetails?.userNames?.firstName?.first);
// console.log(userDetails?.userName?.firstName?.first);

// const obj1={1:'a',2:'b'};
// const obj2={3:'a',4:'d'};

// const newObj=Object.assign(obj1,obj2); //Merged object gets stored in obj1
// const newObj=Object.assign({},obj1,obj2); //Merged object gets stored in the emoty object {}
// console.log(newObj);

// const newObj = {...obj1, ...obj2};
// console.log(newObj);

// const myObj={
//     user1:{
//         name:"Anisha",
//         age:23
//     },
//     user2:{
//         name:"Muskan",
//         age:21
//     }
// };
// //Converts to an array the entries keyword
// console.log(Object.entries(myObj));

//JSON Format: Javascript Object Notation, is mostly of the object format where the key and values are placed in quotes
//Form in which API exist
// {
//     "name":"Anisha",
//     "age":23,
//     "city":"Purnea"
//     "isStudent":false,
//     "address":{
//         "street":"123 Avenue",
//         "city":"Purnea"
//     }
//     "hobbies":["video games", "watching series"]
// }

// //Can also be of array form, containing objects within(Another form in which API's exist):
// [
//     {
//         "address":{
//         "street":"123 Avenue",
//         "city":"Purnea"
//     }
//     "address":{
//         "street":"123 Avenue",
//         "city":"Purnea"
//     }
//     }
// ]




