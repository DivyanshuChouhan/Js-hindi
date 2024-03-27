/*Primitive Datatypes 

7 types : String , Number , Boolean, null, undefined, Symbol, BigInt */

const score  = 100;
console.log(typeof score)//Output  = number
const score2 = 25.5;
console.log(typeof score2)//Output  = number
const isLoggedIn = false
console.log(typeof isLoggedIn)//Output  = boolean
const outsideTemp = null
console.log(typeof outsideTemp)//Output  = object
let userEmail;
console.log(typeof userEmail)//Output  = Undefined
const Id = Symbol('123')
console.log(typeof Id)//Output  = Symbol
const ValId = Symbol('123')
console.log(typeof ValId)//Output  = Symbol
console.log(Id === ValId)//Output = false

const Bignumber = 2555454646464641212n //putting n at the end turn it into BigINt
console.log(typeof Bignumber)//Output  = BigInt
//Reference type / non premitive datatype

//Array , Object , Functions
const hero = ["Rakesh", "Raman", "Ajay"]//Array
console.log(typeof hero)//Output  = object

let myobj ={
    name: "Divyanshu",
    age: 21,
}
console.log(typeof myobj)//Output  = object

const myfun = function(){
    console.log("Hello");
}
console.log(typeof myfun) //Output  = function
//Javascript is dynamically typed language :which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

 