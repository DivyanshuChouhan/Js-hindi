//Immediately Invoked Function Expression (IIFE) => To protect from the global scope pollution means, to remove global scope variables/declaration pollution
         //global scope ke pollution se problem hoti h to us global scope ke variables ya declaration ke pollution ko hatane ke liye 

//named IIFE
 (function chai(){
    console.log(`DB CONNECT`);
})();//to end immediate inovke function it is necessary to put semi colon (;) else it will give error      ()()//first paranthis() for writing function defination and second paranthis () for execution call  

//unnamed IIFE
(()=>{
    console.log(`DB CONNECT TWO`);
})();

//Argument in IIFE line 17
((name)=>{
    console.log(`DB CONNECT TWO ${name}`);
})('DIVYANSHU');

//If question is asked to write two IIFE so always remember to end first IIFE with semicolon ;