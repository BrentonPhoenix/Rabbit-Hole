// let intString = "12345"
// let intMathString = "1 + 1"// no difference between "1+1" and "1 + 1" as expected

// console.log(intString) // result is 12345 printed to the console
// console.log(intMathString) // result is 1+1 written in the console


// console.log(intString * 1)// result is 12345 printed in the console
// console.log(intMathString * 1) // result is NaN 

// console.log("parseInt intString ",parseInt(intString)) //result 12345
// console.log("parseInt intMathString ",parseInt(intMathString)) //result 1

// console.log('parseFloat intString ', parseFloat(intString))//12345
// console.log('parseFloat intMathString ', parseFloat(intMathString))//1


// console.log('Number intString',Number(intString))//12345
// console.log('Number intMathString',Number(intMathString))//NaN



//it looks like if i want to convert a math expression string(such as "1+1") to integer(s) I will need to loop over it I now see why people love TypeScript. Time to test it out with Multiplication and division
let intMultiString = "2 * 2"
let intDiviString = "16 / 2"

console.log(intMultiString)//2 * 2
console.log(intDiviString) //16 / 2


console.log('intMultiString',intMultiString * 1)//NaN
console.log('intDiviString',intDiviString * 1) //NaN

console.log("parseInt intMultiString ",parseInt(intMultiString))//2 
console.log("parseInt intDiviString ",parseInt(intDiviString))  //16

console.log('parseFloat intMultiString ', parseFloat(intMultiString))//2
console.log('parseFloat intDiviString ', parseFloat(intDiviString)) //16


console.log('Number intMultiString ',Number(intMultiString))//NaN
console.log('Number intDiviString ',Number(intDiviString))//NaN