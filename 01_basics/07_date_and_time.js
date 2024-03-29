//DATES //date is object in javascript,,,,, In javascript month is denoted or started with 0 

let mydate = new Date()
console.log(mydate.toString());//convert to string output = Fri Mar 29 2024 12:07:21 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

// let mycreatedate = new Date(2023,0,6)//  **2023 is year , 0 is month ( in javascript month are started with 0), and 6 is date
// console.log(mycreatedate.toDateString());  **Mon Mar 06 2023
// let mycreatedate = new Date(2023 , 0 , 23 , 5 , 3) // **time value also 5 and 3 are time value
// console.log(mycreatedate.toLocaleString());//   ** 1/23/2023, 5:03:00 AM also shows time
//let mycreatedate = new Date("2023-01-14")//      **ismee month 1st se start hota h
// console.log(mycreatedate.toLocaleDateString()); **1/14/2023
 let mycreatedate= new Date("01-12-2023");
// console.log(mycreatedate.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));//to bring into seconds and to avoid point values we use math.floor


let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());//month start with 0 so our iutput is 2 which means march 0 = jan, 1 = feb ,2 = march
console.log(newdate.getDay());

console.log(`Date is ${newdate.toLocaleDateString()} and  month is ${newdate.getMonth()} and time is ${newdate.getTime()}`);