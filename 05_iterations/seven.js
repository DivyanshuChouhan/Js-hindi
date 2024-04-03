//map => b

//Using map in array
const numbers =[1,2,3,4,5,6,7,8,9,10]

//const newnum = numbers.map((items)=>(items+10))
//console.log(newnum);

//ye for each se same 
 //numbers.forEach(item=> console.log(item+10))


 //Chaining one method after another method 
const newnums = numbers
                    .map((num)=> num*10)//method 1 but the values changed using method 1 are used by method 2
                    .map((num)=> num+1)//method 2 take value of method 1
                    .filter((num)=>num>=40)//method 3 take value of method 2
                    console.log(newnums);

