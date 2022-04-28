let intString = "12345"
let intMathString = "1+1"

console.log(intString) // result is 12345 printed to the console
console.log(intMathString) // result is 1+1 written in the console


console.log(intString * 1)// result is 12345 printed in the console
console.log(intMathString * 1) // result is NaN 

console.log("parseInt intString ",parseInt(intString)) //result 12345
console.log("parseInt intMathString ",parseInt(intMathString)) //result 1

console.log('parseFloat intString ', parseFloat(intString))//12345
console.log('parseFloat intMathString ', parseFloat(intMathString))//1