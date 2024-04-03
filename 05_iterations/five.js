//for each


const code = ["js","ruby","java","cpp"]

code.forEach( function (item) {
    //console.log(item);
})

//We can also write arrow function
code.forEach(  (item) => {
    //console.log(item)
})

//We can also create a new function and then give its parameter to the for each
//ex

 function print(items){
    //console.log(items);
 }
code.forEach(print)

//not only items but also we can access index and array list
code.forEach(  (item, index, arr) => {
   // console.log(item,index,arr)
})


//Object inside array pr iteration

const myCodiing =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCodiing.forEach((item)=>{console.log(item.languageName);})