//if      

/*<, >, <=, >=,
 ==  => Equality check
 !=  => Not equal
 === => Equality check it also check datatype */
 //1.
//const isUserloggedIn = true
// if(2==="2"){
//     console.log("true");
// }

// //2.

// const temperature  = 30
// if(temperature<=30){
//     console.log("less than 30");
// }else {
//     console.log("greater than 30");
// }

// //3.

// const score = 500
// if(score > 100){
//     const power = "fly"
//     console.log(`Your score is ${score} you have power to ${power}`);
// }

//4.

// const balance = 1000
// if(balance >500) console.log("Test pass"); //we can write code in this way

//const balance = 1000
// if(balance >500) console.log("Test pass"), console.log("Test pass again");//we can write code in this way also but not recommended its looks immature

//Nested if 

// const balance = 1000
// if(balance<500){
//     console.log("Less than 500");
// }else if (balance<700) {
//     console.log("Less than 700");
// }else if (balance<900) {
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1500");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//&& AND operator both the statement must be true
if (userLoggedIn  && debitCard ) {
    console.log("You can purchase");
//|| OR operator any of the statement must be true    
}if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Successfully Logged In");
}
