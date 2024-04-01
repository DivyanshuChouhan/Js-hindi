function sayMyName(){ //Function syntax
    console.log("divyanshu");
}

//sayMyName() //calling function 

// function addnum(num1,num2){//num1 and num2 are parameters
//     console.log(num1+num2)
// }
// addnum(2,5) //calling function this 2,5 are arguments



function addnum(num1,num2) {
    //let result = num1+num2 
    return num1+num2 // another way 
}
const result = addnum(5,6) //calling function and storing it to variable result
//console.log(result);


function logIn(username){
    if(username===undefined){//also can be written as !username
        console.log("Enter valid username");
        return
    }
    return `${username} just login`
}

//console.log(logIn("Divyanshu"))


function calculateCartPrice(...item){//... =>rest or spread operator accorfing to use case , here in function we known as rest operator but at the time of array and object concat it is known as spread operator
    return item                 //this rest operator helps to represent multiple value in single parameter 
}

console.log(calculateCartPrice(200,400,800,1000));



//Object inside Function


// const user = {// not compulsary to make object first you can also write it in argument
//     name:"Divyanshu",
//     price: 1000
// }

function obj(anyobject){//Anyobject is used because it can be used for anyobject
    console.log(`This is ${anyobject.name} and price is ${anyobject.price}`);
}

obj({
    name:"Divyanshu",
    price:10220
})


// const myarr =["Divyanshu","Arjun","Yash"]
// function arrhandle(anyarray){      //EITHER IN THIS WAY
//     console.log(anyarray);
// }
// arrhandle(myarr)

const myarr =["Divyanshu","Arjun","Yash"]
function arrhandle(anyarray){
    return anyarray;                 //OR IN THIS WAY  
}
console.log(arrhandle(myarr))