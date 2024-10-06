//filter() is basically used in javascript to return only those values which meet a certain condition
//Used only with arrays
//Creates a new array based on condition
//Unlike forEach loop which do not return anything, this returns us the output required, and is not undefined
//In this case too callback function is required
const myArr=[2,3,4,5,6];
const result=myArr.filter((item)=>item>4);//Here implicit return have been used so no {} are required, and no return statement
//It returns the elements in the array which are greater than 4
console.log(result);

const result1=myArr.filter((item)=>{
    //It is important to note that in this case explicit return {} have been used, so return keyword is important
    return item>3;
})
console.log(result1); //This will return items greater than 3

const result2=myArr.filter(function (item)
{
    return item>1;
    //In this case too callback function have been provided, so will give the results
})
console.log(result2);

//Function can also be passed in filter()
function myResult(item)
{
    return item>4
}
console.log(myArr.filter(myResult))


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

//We will get the similar type of values from the databses, objects within arrays
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
/*Thus, to get any particular book from the dataset we will be using the filter()*/
let userBooks = books.filter( (bk) => bk.genre === 'History') //Implicit return
//console.log(userBooks); //Returns the complete object which meets the above condition

  userBooks = books.filter( (bk) => { //Explicit return, so return keyword have been used
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

//Thus in order to return any particular value from the userbooks object we can use the concept of for...Each or for...in loops
for (const bk in userBooks) {
    console.log(userBooks[bk].title);
    /*Since for...in loop gives us the index of the array, and userBooks is an array, to access the object
    required we will pass userBooks[bk], since bk is a index, and then to extract particular value we
    simply use the name property with dot operator.*/
}
/*Since for of operator returns us the value of elements of an array, in this case it is an object
Thus to get the value of a particular property we pass the property name with dot operator*/
for (const bk of userBooks) {
    console.log(bk.title);
}