const name = "Divyanshu"
const age = 22


// console.log(name + age);//outdated method
console.log(`My name is ${name} and my age is ${age}`);//known as string interpolation

const gameName = new String('Ballu')//it also basically store the string value but also its key value pair such as B[0],a[1],l[2],l[3],u[4]

console.log(gameName[3]);//after gameName we can give values which we want to access [3]=l
console.log(gameName.length);
console.log(gameName.toUpperCase());//it not change our orignal value because it take copy of value and then perform operation as it is stored in stack
console.log(gameName.charAt(1));//tells the character at given position ex: what comes at 1 so output is a
console.log(gameName.indexOf('u'));//with given character find its position
console.log(gameName.substring(0,3))//0(start)- 3(end)    B[0],a[1],l[3]
console.log(gameName.slice(-2,4));//we can also use negative values 

const newString = "   Divyanshu   "
console.log(newString);//print with spaces
console.log(newString.trim());//remove starting and ending spaces trim work on whitespaces and new line 

const url = "https://dc.com/dc%20chouhan"
console.log(url.replace('%20','-'));//it replace %20 with - 