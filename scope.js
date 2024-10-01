//Here, we will study about local and global scope

//Remember to not use var while declaring any variables, because if it's declared using var in a block then it will get accessed outside it too
//But var declared inside a function won't be detected outside it
//But it is best to avoid using var keyword
//Example:
var numb=1157; //This is a global scope.
if (true)
{
    //Local scope inside a block
    var numb=52; //Will be accessed outside if block
    let numb1=25; //Won't be detected outside if block
    const numb2=98; //Won't be detected outside if block
}

console.log(numb); //Give output 52, which is inside if block
console.log(numb1); //Will give error, but if it is declared in global scope, then it will give that particular value
console.log(numb2); //Will give error, but if it is declared in global scope, then it will give that particular value



