//ES6  =>2015 bought many features to javscript

const user ={
    username: "Divyanshu",
    price: "1999",

    welcome: function(){
        //console.log(`${this.username}, Welcome to website`);//(this) is used to reffer current context //""this IS ONLY USED IN OBJECT""""
        //console.log(this);//reffer to the current context 
    }
    
}
user.welcome()
user.username = "Ajay"
user.welcome()

//console.log(this);//Output will be empty because we are in node environment but in browser global object is WINDOW OBJECT
//INTERVIEW : Browser ke andr jo global object hai wo h WINDOW OBJECT


// function chai(){
//     let username = "Divyanshu"
//     console.log(this.username);//output will be undefined because ""this is only used in OBJECT"""
// }
// chai()

//ARROW FUNCTION
// const chai = ()=>{ 
//     let username  = "divyanshu"
//     console.log(this);//output will be empty {}
// }
// chai()





//EXPLICIT RETURN METHOD => it means coumplsory to use return keyword
// const addnum = (num1,num2)=>{  //If curly braces({}) are used it is necessary to write return keyword but when you use paranthis () like in next example you dont need to write return keyword
//     return num1+num2
// }
// console.log(addnum(5,7));




//IMPLICIT RETURN METHOD => it means no need to use return keyword
const addnum = (num1,num2)=>  (num1+num2) //when we use paranthisis() there is no need to write return keyword 

console.log(addnum(5,7));



