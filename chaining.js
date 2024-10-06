//In chaining basically we can use higher order functions together in a chain, to further modify values
/*Higher-order functions in JavaScript are functions that can take other functions as arguments or return 
them as results.*/
//E.g: map(), forEach(), reduce(), filter()
//Let us see an example:
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*The first map() multiplies the elements in array by 10, the second mao adds 1 to the previous modified 
array, the higher order function that is filter(), puts the condition on previous modified array.*/
const newNums = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)

console.log(newNums);