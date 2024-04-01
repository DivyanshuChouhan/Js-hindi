if(true){ //this is scope means {} this is scope now in the given example we declared some values in let , const and var but this should be inside this scope let and const work properly but var break the scope .
    let a = 10
    const b = 20
    var c = 30
}

//var ,let ,const => GLOBAL SCOPE
 
//if{}, function{}, {} => BLOCK SCOPE




// console.log(a);//error
// console.log(b);//error
//console.log(c);// 30 //var break the scope and allow to print value outside the scope




function one(){ //Parent 
    const name ="Dc"

    function two(){//Children   
        const website ="youtube"
        console.log(name);//children can access values of parent
    }
   // console.log(website);//ERROR because it is outside the scope//parent cannot access values of children
    two() //if the above line has error the compilation stop there and never reach to the next line means on two()
}
one()


if(true){
    const username = "Divyanshu"
    if(username==="Divyanshu"){
        const age = 20
        console.log(username + age);
    }
    // console.log(age);//ERROR because it is outside the declared scope

}
//console.log(username);//Error because it is outside the declared scope


//+++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++

console.log(addone(3));//no error we can use it before function  declaration in the below type 1
function addone(num){// Type 1
    return num+1
}



//console.log(addTwo(5))//error because we cannot use it before function declaration in below type 2
const addTwo = function(num){// Type 2
    return num+2
}
