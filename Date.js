const Date1=new Date();
//console.log(Date1);
// console.log(Date1.toString()); //Provides a better readable format
// console.log(Date1.toLocaleString());
// console.log(Date1.toLocaleDateString());
// console.log(Date1.toLocaleTimeString());
// console.log(Date1.getTime());
// console.log(Date1.getFullYear());
// console.log(Date1.getMonth());
// console.log(Date1.getMilliseconds());
// console.log(Date1.toTimeString());
// console.log(typeof Date1);

// const myDate=new Date(2023,3,5); //Remember months in js starts from 0, here 2023 is year, 3 is index of month which means April, and 23 is the Date
// console.log(myDate.toDateString());

// const myDate = new Date(2023,3,5,10,56,57);
// console.log(myDate.toLocaleString());

const myDate=new Date("2024-01-31")
// console.log(myDate.toLocaleString());
console.log(myDate.getTime()); //Time in milisecond from 1 Jan, 1970
// console.log(Date.now()); //Time in milisecond from Jan 1 1970
console.log(Math.floor(Date.now()/1000)); //Converts to string without decimal
