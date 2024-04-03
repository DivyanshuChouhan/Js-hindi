const myArr = [1,2,3,4,5]

//console.log(myArr[2]);
//When you perform copy operation in Array in javascript it create shallow copy(a copy whose properties share the same refrence )/changes are made also in original values

const myHeros = ["Ramesh","Suresh","ajay"]
const myArr2 = new Array(10,9,8,7,6)
//console.log(myArr2.length);

//Array methods

myArr.push(6)//add new value to array
//console.log(myArr);
myArr.pop()//remove last element from array
//console.log(myArr);

myArr.unshift(0)//add value at the start 
//console.log(myArr);

myArr.shift()//remove value from the start 
//console.log(myArr);

// console.log(myArr.includes(9));//to check whether the array include the given value or we can say we ask question is the value present in the array in this we use include(9) it means our array include 9 or not//output in boolean form
// console.log(myArr.indexOf(2));// to check index of given value

const newArr = myArr.join()//it change type of array(Adds all the elements of an array into a string) 
// console.log(myArr);
// console.log(newArr);


console.log("A",myArr);
const nya1 = myArr.slice(1,3)//last index value not included only 1,2 are included SLICE DO NOT MANIPULATE ORIGNAL ARRAY
console.log(nya1);//Output =[2, 3]
console.log(myArr);//Output = [1, 2, 3, 4, 5]

const nya2 = myArr.splice(1,3)//last index value is also included 1,2,3 are included but also SPLICE MANIPULATE ORIGIANAL ARRAY
console.log(nya2);//Output = [2, 3, 4]
console.log(myArr);//but in splice the given values are spliced but after that only remaining values left in this case only 1,5 left when we splice(1,3)


