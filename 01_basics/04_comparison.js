//The reason is that an equality check == and comparision > < >= <= works differently

console.log(null > 0)//output = false
console.log(null == 0)//output false
console.log(null >= 0)//output = true  

console.log(undefined > 0)//output = false
console.log(undefined == 0)//output false
console.log(undefined >= 0)//output = false

//=== strict check it also check both datatypes also example

console.log("2"===2);//output  = false
