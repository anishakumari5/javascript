//The this keyword in JavaScript refers to the object that is executing the current code.
const myObj={
    name:"Anisha",
    age: 23,
    myFunction: function()
    {
        console.log(this); //This prints the object myObj
        return `${this.name} and ${this.age}`; //This keyword refers to the current object myObj, and the rest is used to access the properties
    },
}

// console.log(myObj.myFunction()); //Generates the output related to the above object (Anisha and 23)
// myObj.name="Muskan"; //Changes the property name of the object myObj gives the output (Muskan and 23) 
// console.log(myObj.myFunction()); //gives the output (Muskan and 23) 
// console.log(this); //Gives an empty object in the node environment --> {}
//Remember in the console on the browser console.log(this); gives Window object, as it is the global object there

//This in function:
function One()
{
    const username="Anisha";//Gives the output as a global object
    console.log(this.username); //Gives the output as undefined, because this works only with objects
    console.log(this);
}
One();

