//reduce 

const mynums = [1,2,3]

// const mytotal = mynums.reduce((accu,curval)=>{
//     console.log(`accu : ${accu} and curval : ${curval}`)
//     return accu+curval
// }, 0)// i0nitial value of accumlator
// console.log(mytotal);


// const mytotal = mynums.reduce((accu,curval)=>accu+curval,0)
// console.log(mytotal);

const shoppingCart =[
    {
        itemname : "js course",
        price: 2999

    },
    {
        itemname : "python",
        price: 999

    },
    {
        itemname : "mobile dev",
        price: 5000

    },
    {
        itemname : "DSA",
        price: 12500

    }
]

const total = shoppingCart.reduce((acc,item)=>(acc +item.price), 0)
console.log(total);