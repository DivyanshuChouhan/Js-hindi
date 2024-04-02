// const month = 3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feburary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

//INTERVIEW : if there is no break between cases so if key is matched than all the code after it is executed exept default
//also we can use string as case 
const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feburary");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Invalid");
        break;
}