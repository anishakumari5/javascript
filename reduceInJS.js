/*
reduce() is a higher-order function in JavaScript that applies a function to an accumulator 
and each element in an array to reduce the array to a single value. 
It's commonly used for tasks like:

Calculating sums, products, averages, or maximum/minimum values.
Flattening nested arrays.
Combining multiple arrays into a single array.
It rturns a new array
*/
//Syntax:
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
/*Here,
total: The initialValue, or the previously returned value of the function.
currentValue: The value of the current element.
currentIndex: The index of the current element.
arr: Is the array
 */

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
/* In the reduce function used above, acc is the accumulator which stores the value which is returned, 
curr stands for the current value, acc+curr is basically used to add the accumulator to the current value
of the array, this continues till the last element of the array is reached. 0 here is basically the initial 
value provided, it represents the accumulator, in above case acc, thus in the first iteration acc=0. The 
result gets stored in myTotal.
In place of acc+curr, we can use anything like acc*curr
 */

console.log(myTotal); //Gives the sum of the elements of the array

//When we would create an e-comm website, reduce() would help us in many ways, also in other projects
/*Let us suppose we create an e-comm website, and have added multiple items, the total bill of which is 
needed to be calculated, in this case reduce can help us achieve the task, instead of using complex functions */
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
/*Since the abive is the form of database, it contains objects within an array, thus to get the 
price property's value we have used item.price, since in this case item is the currentValue of the array
which in this case is an object, and to access the value of a particular property it needs to be passsed
in terms of either dot notation or box notation, and the rest is used to sum the entire price list.
*/

console.log(priceToPay);