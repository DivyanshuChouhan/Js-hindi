/*Primitive Datatypes 

7 types : String , Number , Boolean, null, undefined, Symbol, BigInt */

const score  = 100;
const score2 = 25.5;
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const Id = Symbol('123')
const ValId = Symbol('123')
console.log(Id === ValId)//Output = false

const Bignumber = 2555454646464641212n //putting n at the end turn it into BigINt

//Reference type / non premitive datatype

//Array , Object , Functions
const hero = ["Rakesh", "Raman", "Ajay"]//Array

let myobj ={
    name: "Divyanshu",
    age: 21,
}

const myfun = function(){
    console.log("Hello");
}
//Javascript is dynamically typed language :which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

 