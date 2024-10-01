const score=100;
console.log(score);

const score1 = new Number(200.9575);
const score2=new Number(100000)
console.log(score1);
console.log(score1.toFixed(2));
console.log(score1.toPrecision(2));
console.log(score1.toExponential(9)); //9 means number of digit after decimal, it must be between 0-100
console.log(score2.toLocaleString());
console.log(score2.toLocaleString("en-IN"));
console.log(score2.valueOf())
const otherNum=new Number(154.968);
console.log(otherNum.toPrecision(1));
