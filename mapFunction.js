const myArr=[1,2,3,4,5,6,7,8,9];
//map(): Creates a new array by applying a function to each element of the original array
//Better then forEach() as forEach returns undefined, but map returns a new array
/*Transform array elements: The primary goal of map() is to modify each element of an array and
 create a new array with the transformed elements. */
 //In this case also callback function is needed
 const result=myArr.map((item)=>item+10);//Implicit return no return keyword required
console.log(result);

const result1=myArr.forEach((item) => console.log(item+10));
console.log(result1);
