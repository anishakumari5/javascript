/*var a=3;
console.log(a);
var b='3';

console.log(a===b)*/

//Using variables to assign an object's property

/*var testObj={
    10:"Anisha",
    11:"Muskan",
    12:"Mussu",
    "age":12
};

var playerNum=11;
var playerName=testObj[playerNum];
console.log(testObj[playerNum]);
console.log(testObj.playerNum);
console.log(testObj.age);
*/

/*function Myfunction (value) {
    var locate={
        "first":"Anisha",
        "second":"Muskan",
        "third":"Anni",
        "fourth":"Musssu"
    };
    return locate[value];
}
console.log(Myfunction("first"));
console.log(Myfunction.hasOwnProperty("third"));
*/

//Has own property in a function
/*var testObj={
    10:"Anisha",
    11:"Muskan",
    12:"Mussu",
    "age":12
};
function Myfunction (value) {
   if(testObj.hasOwnProperty(value))
    {
        return testObj[value];
    }
    else{
        return "Has No Property";
    }
}

console.log(Myfunction("sweety"));
*/
/*
var ComplexObj = [
    {
        "name": "Anisha",
        "age": 23,
        "country":"India"
    },
    a=23,
    b="anisha",
    {
        "name":"Muskan",
        "age":22,
        "country":"India"
    },
    true
];

console.log(ComplexObj);
*/
/*
//Nested Objects
var School={
    "class":{
        "section":{
            "name":"A",
            "total_students":87
        },
        "class_Teacher":{
            "name":"Muskan",
            "age":23
        }
    },
    "anyOtheObject":
    {
        //Create any number of object
    }
};
console.log(School.class.class_Teacher);
*/
/*
//Nested Arrays
var NestedArr=[
    {
        type:"flowers",
        list:[
            "rose",
            "lily",
            "raat ki raani"
        ]
    },
    {
        type:"insect",
        list:[
            "bees",
            "grasshopper",
            "mosquito"
        ]
    },
    {
        num:[10,12,14]
    }
];

console.log(NestedArr[2].num[1]);

var array=[2,
    3,
    "Anisha",
    {
        "name":"Anisha",
        "age":23,
        "university":"Chandigarh University"
    },
    {
        items:"person",
        list:[
            "names",
            "gender",
            "friends"
        ]
    },
    [4,12,"string"]
];
*/
/*
var Collection = {
    "12345": {
        "Artist": "Arijit Singh",
        "Album": "The Legend",
        "Tracks": [
            "Sun Mere",
            "The G.O.A.T",
            "O Deva Deva"
        ]
    },
    "23456": {
        "Album": "GIAN",
        "Tracks": [
            "Mein Hoon Gian",
            "Mein Hoon Taqatwar",
            "1990"
        ]
    },
    "34567": {
        "Aritst": "Lil Naz",
        "Tracks": [
            "1547",
            "Am a Nigga"
        ]
    },
    "76567": {
        "Album": "Scary Shit"
    }
};

//Basically used to create a copy of the original object
var CollectionCopy = JSON.parse(JSON.stringify(Collection));

function updateCollection(id, prop, value) {
    if (value === "") {
        delete Collection[id][prop];
    }
    else if(prop==="Tracks"){
        Collection[id][prop]=Collection[id][prop]||[];
        Collection[id][prop].push(value);
    }
    else{
        Collection[id][prop]=value;
    }
    return Collection;
}
updateCollection(23456,"Album","");
console.log(updateCollection(34567,"Tracks","Plug the cotton"));
*/
/*
//Using nested loop
var result=1;
function multiplyAll(arr)
{
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<MyArray[i].length;j++){
            result*=MyArray[i][j];
        }
    }
    return result;
}
var MyArray=[[1,2],[3,4,5],[6,7,8,9]];
console.log(multiplyAll(MyArray));
*/

/*
var NewObject=[
    {
        "Firstname":"Anisha",
        "intelligence":"genius",
        "age":24,
        "likes":["horror","chicken","biryani"]
    },
    {
        "Firstname":"Rakesh",
        "intelligence":"decent",
        "age":29,
        "likes":["horror","chicken","biryani"]
    },
    {
        "Firstname":"Isha",
        "intelligence":"Good",
        "age":24,
        "likes":["horror","chicken","biryani"]
    },
    {
        "Firstname":"Shalu",
        "intelligence":"Poor",
        "age":20,
    }
];


function MyNewFunction(name,prop)
{
    for(var i=0;i<NewObject.length;i++){
        if(name===NewObject[i].Firstname){
            return NewObject[i][prop];
            break;
        }
    }
}

console.log(MyNewFunction("Rakesh","age"));
*/

//console.log(Math.floor(Math.random()*20));
//console.log(parseInt("10011",8));

/*function checkScope()
{
    var i="function scope";
    if(1){
        let i="Block Scope";
        console.log(i);
    }
    console.log(i);
}

console.log(checkScope());
*/

/*function constObj()
{
    const checkObj={
        PI:3.14,
    };
    Object.freeze(checkObj);
    checkObj.PI=45;
    return checkObj.PI;
}
console.log(constObj());
*/
/*
const s=[1,2,3];
Object.freeze(s);
s[0]=9;
console.log(s);
*/
/*
function outerFunction() {
    function innerFunction() {
      console.log("Hello from the inner function!");
    }
    return innerFunction();
  }
  
  const myFunction = outerFunction();
  myFunction; // Output: "Hello from the inner function!"
*/
/*
console.log(getname);
getname();
var getname=()=>{
    console.log("Hi");
}
*/
/*
function addAll( a, b=3)
{
   return a=a*b;
}
console.log(addAll(2,5));
console.log(addAll(2));

function append(value, array = []) {
    array.push(value);
    return array;
  }
  
  console.log(append(1)); // [1]
  console.log(append(2)); // [2], not [1, 2]

  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]

  */
/*
  var myObj={
    name:"Anisha",
    city:"Purnea",
    printIt: function(){
        console.log(`My name is ${this.name} `);
    }
};

var myObj2={
    name:"Kumari",
};

/*console.log(myObj.__proto__);
console.log(myObj2.__proto__);
console.log(Object.prototype);

//Not a good way to modify or assign
myObj2.__proto__=myObj;
console.log(myObj2.__proto__);
console.log(Object.getPrototypeOf(myObj2));
console.log(myObj);
console.log(myObj2.__proto__.__proto__);
console.log(Object.prototype);

Function.prototype.sound = "roar";
Object.prototype.sound = "roar";

function Animal() {}
console.log(Animal.sound); // Output: roar

const lion = new Animal();
console.log(lion.sound); // Output: roar

lion.sound = "meow"; // Shadows the prototype's 'sound' property
console.log(lion.sound); // Output: meow
*/
/*
const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet(); // hello!
console.log(carl.__proto__.__proto__);
console.log(Object.prototype);
*/
/*
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }

  Object.assign(Person.prototype, personPrototype);
  // or
  // Person.prototype.greet = personPrototype.greet;
  const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

console.log(reuben.__proto__);
console.log(Person.prototype);
*/
/*
let x=5;
console.log(String(7));
*/
/*
const myMap=new Map([['a',1],['b',2]]);
myMap.set('c',"Anisha");
myMap.delete(2);
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('b'));

for(const [anni,value1] of myMap){
    console.log(`${anni}:${value1}`);
}
*/
/*
//STACK
class Stack{
    constructor()
    {
        this.arrays=[];
    }
    push(element)
    {
        this.arrays.push(element);
    }
    pop()
    {
        if(this.isEmpty()){
            return "Empty Stack";
        }
        return this.arrays.pop();
    }
    peek()
    {
        if(this.isEmpty()){
            return "Empty Stack";
        }
        return this.arrays[this.arrays.length-1];
    }
    isEmpty()
    {
        return this.arrays.length===0;
    }
}

const neWStack=new Stack();


console.log(neWStack.pop());
*/
/*
//QUEUE
class Queue{
    constructor()
    {
        this.array=[];
    }
    enqueue(element)
    {
        this.array.push(element);
    }
    dequeue()
    {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.array.shift();
    }
    peek()
    {
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.array[0];
    }

    print()
    {
        return this.array.toString();
    }

    isEmpty()
    {
        return this.array.length===0;
    }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.peek());

console.log(myQueue.print());

console.log(myQueue.isEmpty());

*/
/*
//Better Implementation of Queue
class Queue{
    constructor()
    {
        this.array={};
        this.front=0;
        this.rear=0;
    }

    enqueue(element)
    {
        this.array[this.rear]=element;
        this.rear++;
    }

    dequeue()
    {
        const item = this.array[this.front]
        delete this.array[this.front];
        this.front++;
        return item;
    }

    peek()
    {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.array[this.front];
    }

    isEmpty()
    {
        return this.size()===0;
    }

    size()
    {
        return this.rear-this.front;
    }

}

const myQueue=new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);


console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.peek());
console.log(myQueue.size());


//console.log(myQueue.print());

console.log(myQueue.isEmpty());

*/
/*
//Implementing Stack using Object

class Stack{
    constructor(){
        this.Object={};
        this.front=0;
        this.rear=0;
    }

    push(element)
    {
        this.Object[this.rear]=element;
        this.rear++;
    }

    pop()
    {
        const item=this.Object[this.rear-1];
        delete this.Object[this.rear];
        this.rear--;
        return item;
    }

    peek()
    {
        if(this.isEmpty()){
            return "Empty Stack";
        }
        return this.Object[this.rear-1];
    }

    isEmpty()
    {
        return this.rear===0;
    }

    size()
    {
        return this.rear;
    }
}

const myStack=new Stack();

myStack.push(12);
myStack.push(15);
myStack.push(20);
myStack.push(25);
myStack.push(30);

console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.peek());

console.log(myStack.size());
*/
/*
const myWeakMap = new WeakMap();
const obj1 ={"name":"Anisha"};
const obj2={"age":23};
myWeakMap.set(obj1,"Anisha");
myWeakMap.set(obj2);
console.log(myWeakMap);
*/
/*
let buffer = new ArrayBuffer(16);
let view = new DataView(buffer);

view.setInt8(0, 127);      // Sets 8-bit integer at byte 0
view.setUint16(1, 255);    // Sets 16-bit unsigned integer at byte 1

console.log(view.getInt8(0));     // Outputs: 127
console.log(view.getUint16(1));   // Outputs: 255
*/

class Node{
    constructor(value)
    {
        this.value=value;
        this.next=0;
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    isEmpty()
    {
        return this.size===0;
    }
    getsize()
    {
        return this.size;
    }
    prepend(value)
    {
        //Adding elements at the back of the list
        const node = new Node(value);
        if(this.isEmpty())
        {
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    append(value)
    {
        //Ading elements at front of the list
        const node=new Node(value);
        if(this.isEmpty())
        {
            this.head=node;
        }
        else{
            const prev=this.head;
            while(prev.next)
            {
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }
    insert(value,index)
    {
        if(index<0 || index>this.size)
        {
            return;
        }
        if(index===0)
        {
            this.prepend(value);
        }
        else{
            const node=new Node(value);
            let prev=this.head;

        }
    }
    print()
    {
        if(this.isEmpty()){
            console.log("The List is empty");
        }
        else{
            let curr=this.head;
            let storedValue='';
            while(curr){
                storedValue+=`${curr.value} `;
                curr=curr.next;
            }
            console.log(storedValue);
        }
    }
}

const list=new LinkedList();
console.log("Check for if the Linked List is empty",list.isEmpty());
console.log("The size is ", list.getsize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();