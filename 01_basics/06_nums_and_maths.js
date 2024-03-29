const score  = 500
const balance = new Number(200)
// console.log(balance);

console.log(balance.toString);//convert it into string and provide all the operations which we can perform on any string
//console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//output = 200.00

const othernum = 23.562
// console.log(othernum.toPrecision(3));//upto which value you need precision 2(1)3(2).5(3)  62

const hundread = 104562
// console.log(hundread.toLocaleString('en-IN'));//convert value in  indian terms 1,04,562


//++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//absolute value ex: -4 turns to positive 4
console.log(Math.round(5.2));//roundoff in similar manner as taught in school 
console.log(Math.ceil(4.2));//it always roundoff to grater value only 4.2 becomes 5
console.log(Math.floor(5.9));//it always roundoff to lower value 5.9 become 5

console.log(Math.random());//Always return random values between 0 and 1 
console.log((Math.random()*10)+ 1);//random between 0 and 10 if we put 200 so number betwee 0 and 200
console.log(Math.floor(Math.random()*10)+1);//if we want only single random value we will rapup it with math.floor

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//formula (Math.random()*(max - min + 1) + min) and to get a siingle value use Math.floor