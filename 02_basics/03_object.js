//Singleton  => if object is created using constructor it is known as singleton 
//Object.create

//object literals
const my = Symbol("key1")//declaring symbol 
const intro = {
    name: "Divyanshu",
    "full name" : "Divyanshu chouhan",
    [my] : "key1",//to use symbol as a key in object we have to use square bracket[] on key variable ex:[my]
    age: 20,
    education: "b.tech / 3rd Year ",
    location: "Ujjain",
    email: "divyanshu.chouhan@gamil.com",
    isloggedin: false,
    lastLoginDays:["Monday","Tuesday"]

}
//two ways to access objects 
console.log(intro.email);
console.log(intro["email"]);//This way is more perfect
console.log(intro["full name"]);//special case where we have to use square bracket
console.log(intro[my]);


intro.email = "divyanshu.chouhan12@gmail.com"//to change value in object
console.log(intro["email"]);
//Object.freeze(intro)// to disable changes or we can say that by using freeze we are not able to do changes in object

console.log(intro);

intro.greeting = function(params) {
    console.log("Hello");
    console.log(`hello ${this["full name"]}`);

    
}

console.log(intro.greeting());