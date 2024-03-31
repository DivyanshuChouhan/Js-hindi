const marvel_hero = ["Ironman","Thor","Captain America"]
const dc_hero = ["Superman","Batman","Flash"]

//marvel_hero.push(dc_hero)//If we push one array to another array it will take the whole array as a one value 
//console.log(marvel_hero);




// const all_hero = marvel_hero.concat(dc_hero)//    To merge two array we use this concat operation
// console.log(all_hero);


// const all_new_hero = [...marvel_hero, ...dc_hero]//  also used to merge two or more array as in concat we have limitation to merge two values but in these we can merge two or more arrays together
// console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)// if array into array cme we use flat operation to make it a single array

console.log(real_another_array);


console.log(Array.isArray("divyanshu")) // to question  is the given value is a array output=  boolean
console.log(Array.from("divyanshu"));//convert the given value into a array
console.log(Array.from({name :"Divyannsu"}));//interesting

let score1 = 100
let score2  =200
let score3 = 300

console.log(Array.of(score1,score2,score3));// take different values from different variable and convert into array
