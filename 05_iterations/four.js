//for in loop mainly used to loop objects



const myobj ={
    js:'Javascript',
    cpp:'C++',
    rb:'ruby',
    swift:"shwift by apple "
}
//for in loop
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);

}

const arr = [2,4,6,8,10]

for (const key in arr) {
    console.log(arr[key]);
}