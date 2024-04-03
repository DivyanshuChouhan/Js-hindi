//for of 

//for of to array
 const arr = [1, 2, 3, 4, 5]

 for (const num of arr) {
    //console.log(num);
 }

//for of to string
 const str1 ="Good morning"
 for (const num of str1) {
    //console.log(`Each char is ${num}`);
 }


 const str ="Good morning"
 for (const num of str) {
   if (num==" ") {//break statement between for of
      //console.log("Space detected");
      break;
   }
    //console.log(`Each char is ${num}`);
 }
 
 //Maps study from mdn 

 const map = new Map()//Maps are basically known for unique values
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")

console.log(map);

//for of for maps
for (const [key , value] of map) {
   console.log(key, ':-', value);
}