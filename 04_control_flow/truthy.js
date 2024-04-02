const userEmail = "divy@ga" 

if(userEmail){
    console.log("Got email");
}else{
    console.log("not got email");
}

/*falsy values => false,  0, -0, BigInt 0n, "", null, undefined, NaN*/
/*truthy value => true, "0", "false", " ", [], {}, function(){}*/


//to check whether array is empty
// const arr = []
//  
// if(arr.length === 0){
//     console.log("array is empty");
// }

//to check whether object is empty
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}