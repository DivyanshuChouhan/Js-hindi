let score = 22
console.log(typeof score);//output is number
console.log(typeof(score));//output is number

let marks = "55abc"
console.log(typeof marks);//output is string


let valueInNumber = Number(marks);
console.log(typeof valueInNumber);//Output is number

console.log(valueInNumber);//Output is NaN(Not a number) because as we can see value of marks is "55abc"

//If we convert "33" it become 33 
//If we convert "55abc" it become NaN
//If we convert any boolean value such as true it become 1 and false become 0

//Other conversions
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//Output is true

//1=> true ; 0 =>false
//""(empty string)=> false
//"divyanshu"=>true