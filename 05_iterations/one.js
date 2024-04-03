//for loop 

for (let i = 1; i <= 10; i++) {
    //console.log(i); values from 1 to 10 
}
//console.log(i);//Shows error because as we know story of scope

for (let i = 1; i <= 10; i++) {
    const element = i
    if (element == 5) {
        //console.log("5 is unique");
    }
    //console.log(i);
}


//***Loop inside loop***
for (let i = 1; i <=10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + " X " + j + " = " + i*j);//table from 1 to 10
    }
    
}

//Loop of array
let myarr =["divyanshu", "ballu", "dc"]
//console.log(myarr.unshift("gopal"));
//console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    //console.log(element);
    
}


//**break and continue**

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("Detected 5");
//         break;// the execution stop or ended here 
//     }
    
// console.log(`Value of index is ${index}`); 

// }

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("Detected 5");
//         continue; //execution remain continue after the detection
//     }
    
// console.log(`Value of index is ${index}`); 

// }