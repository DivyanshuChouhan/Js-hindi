const accountId = 144553 //cannot be changed 
// accountId = 2 not allowed because it is stored in const
let accountEmail ="div.@gmail.com"
var accountPassword =  "12545"//not to use var issue in block scope and functional scope
accountCity = "jaipur"//can use but we should not use

console.log(accountId);
accountEmail = "dcdc@gmail.com"
accountPassword ="21212"
accountCity ="Ujjain"
 console.table([accountId,accountEmail,accountPassword,accountCity])// to print all in tabluar for 