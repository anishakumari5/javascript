//This is basically used to execute a js code on the basis on conditions, which is an important aspect in js
//There are various of them like: if-else if-else, switch, while, and others. et us discuss them here.
//if-else if-else
const balance=500;
if(balance>=500)
{
    console.log("Balance is greater then 500"); /*Only if statement will be printed in this case, although
    else if is true, the first condition gets checked and executed*/
}else if(balance>1000){
    console.log("Balance greater than 1000");
}
else{
    console.log("Balance less then 500");
}

//Switch Statement Syntax:
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//break is important if it won't be there then the switch statement would execute all the cases before default
const rank="Third";
switch (rank) {
    case "First":
        console.log("This is first");
        break;
    case "Second":
        console.log("This is second");
        break;
    case "Third":
        console.log("This is third");
        break;
    default:
        console.log("Default case");
        break;
}

//Nullish Coalescing Operator (??)
//This is used to deal with null and undefined values
/*Let's say we are creating an app, and we need to take value from multiple function, which doesn't
returns null or undefined values, this can be used there.*/

let val1;
// val1=10??67; //In this case will generate the first value, since it isn't null or undefined
// val1=null??12; //In this case will generate 12, since the first value is null
// val1=undefined??33; //In this case will return 33 since the first value is undefined
//This can also be used with multiple variables or functions
// val1=null??561??1000; //In this case will return 561 because it's the first value after null
// val1=null??undefined; //In this case will return undefined, since first value is null
// val1=undefined??null;//In this case will return null, since the first value is undefined

console.log(val1);

