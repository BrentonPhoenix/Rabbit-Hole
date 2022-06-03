let inputOne; //first input field
let inputTwo; //second input field
let mathSign; //which math expression you are running
let multiplicationDecimals = 0

// datatype needs to be a string here to use includes
function Multiplication(numberOne, numberTwo){
if(numberOne.includes('.') && numberTwo.includes('.')){
    let splitNumberOne = numberOne.split(".")
    let splitNumberTwo = numberTwo.split(".")
    console.log('splitNumberOne ', splitNumberOne, " splitNumberTwo ", splitNumberTwo)
        if(splitNumberOne[1] || splitNumberTwo[1]){
            for( i = 0 ; i < splitNumberOne[1].length ; i++ ){
                multiplicationDecimals += 1
                console.log('CLog slNuOne Loop ', multiplicationDecimals)
            }
            for( i = 0 ; i < splitNumberTwo[1].length  ; i++ ){
                multiplicationDecimals += 1
                console.log('CLog slNuTwo Loop ', multiplicationDecimals)
            }
            
        } else {
            console.log('There has been an error in the looping.')
        }
} else {
    let answer = parseFloat(numberTwo) * parseFloat(numberOne)
    console.log(answer)
}
}



Multiplication("12",'10')
console.log(multiplicationDecimals)
// Multiplication('123.245','123.234')
// console.log(multiplicationDecimals)