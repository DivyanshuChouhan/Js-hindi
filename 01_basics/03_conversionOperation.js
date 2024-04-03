
let score = 22
console.log(typeof score)

///console.log(typeof score);//output is number
///console.log(typeof(score));//output is number

let marks = "55abc"
///console.log(typeof marks);//output is string


let valueInNumber = Number(marks);//convert datatype from string to number
///console.log(typeof valueInNumber);//Output is number

///console.log(valueInNumber);//Output is NaN(Not a number) because as we can see value of marks is "55abc"

//If we convert "33" it become 33 
//If we convert "55abc" it become NaN because of mixed datatypes
//If we convert any boolean value such as true it become 1 and false become 0

//Other conversions
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
///console.log(booleanIsLoggedIn);//Output is true

//1=> true ; 0 =>false
//""(empty string)=> false
//"divyanshu"=>true

//**************OPERATIONS**********

let value = 3
let negValue= -value
//console.log(negValue); //output = -3



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);//2 to the power 3
// console.log(2%3);

let str1 = "divyanshu"
let str2 = " chouhan"
let str3 = str1 + str2//Concatenation
//console.log(str3)

// console.log(1 + 2)//Output 3
// console.log("1"+ 2)//Output 12
// console.log(1+"2")
// console.log("1"+2+2)//output 122
// console.log(1+2+"2")//output 32


