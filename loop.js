// For loop is one of a kind of the loop
/*In the condition of for loop, Since const cannot be changed once initialized, this will throw error if 
i is initialized using the const keyword, so better to initialize with let keyword*/
for (let i = 0; i < 10; i++) {
    let element = i;
    console.log(element);
    if(element==5)
    {
        console.log("5 have been detected");
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
    console.log(numb);
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
    console.log(`The value is ${numb1}`);
    numb1++;
} while (numb1<=10);