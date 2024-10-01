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

// console.log(numb); //Give output 52, which is inside if block
// console.log(numb1); //Will give error, but if it is declared in global scope, then it will give that particular value
// console.log(numb2); //Will give error, but if it is declared in global scope, then it will give that particular value


//Remember: Global scope in a console environment in a browser is different from that in the code terminal of node

//Scope in nested function

function one()
{
    const user1="Anisha";
    function two()
    {
        console.log(user1); //This won't give any error because user1 is declared in the parent scope, so the child inherits it
        const user2="Muskan";
    }
    console.log(user2); //This generates error, because user2 have been declared under the child scope and the parent cannot inherit it.
    //two(); //This will generate error as the function two consists of a variable
}

one();