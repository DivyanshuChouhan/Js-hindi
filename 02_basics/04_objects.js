// const tinder = new Object()
// console.log(tinder);

const tinderUser = {}

tinderUser.id = "123avb"
tinderUser.name = "samm"
tinderUser.isloggedin = false

console.log(tinderUser);

const regularUser={ //Object inside Object
    email: "saam.gmail.com",
    fullname: {
        userfullname:{
            firstame: "Divyanshu",
            surname: "chouhan"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstame);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",3:"d"}

//const allObj = { obj1, obj2}

const allobj = Object.assign({} , obj1,obj2)//correct way to combine two objects {}using this is not compoulsary but it is a good practice {}this work as a target
console.log(allobj);

const collab = {...obj1,...obj2}//also combine in this way spread operator
console.log(collab);

const user = [ // objects inside array whenever values come from database
    {
        id: 1,
        email: "axkmxkmx" //array length 0
    },
    {
        id: 1,
        email: "shdjsb" //array length 1
    },
    {
        id: 1,
        email: "gjbgio" // array length 2
    },
    {
        id: 1,
        email: "dfdm"// array length 3
    }
]

console.log(user[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser));// all keys of object using this operation and all the keys are stored in array
console.log(Object.values(tinderUser));// all values of object using this operatio
console.log(Object.entries(tinderUser));// all the key value pairs created in form of array
console.log(tinderUser.hasOwnProperty('isloggedin'));// to check whether the given value present in the object  


const course = {
    coursename: "javascript",
    price: 999,
    courseinstructor: "divyanshu"
}

const {courseinstructor: instructer} = course //object de-structuing
    console.log(instructer)