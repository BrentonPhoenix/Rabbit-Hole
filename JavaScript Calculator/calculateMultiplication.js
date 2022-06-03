let inputOne; //first input field
let inputTwo; //second input field
let mathSign; //which math expression you are running
let multiplicationDecimals = 0

// datatype needs to be a string here to use includes
function Multiplication(numberOne, numberTwo){
if(numberOne.includes('.') || numberTwo.includes('.')){
    let splitNumberOne = numberOne.split(".")
    let splitNumberTwo = numberTwo.split(".")
    // console.log('splitNumberOne ', splitNumberOne, " splitNumberTwo ", splitNumberTwo)
        if(splitNumberOne[1] && splitNumberTwo[1]){
            for( i = 0 ; i < splitNumberOne[1].length ; i++ ){
                multiplicationDecimals += 1
                console.log('CLog slNuOne Loop ', multiplicationDecimals)
            }
            for( i = 0 ; i < splitNumberTwo[1].length  ; i++ ){
                multiplicationDecimals += 1
                console.log('CLog slNuTwo Loop ', multiplicationDecimals)
            }
            
        } else if(splitNumberOne[1]){
            let recombinedNumberOne = splitNumberOne[0] + splitNumberOne[1]
            let intergerAnswer = parseFloat(recombinedNumberOne) * parseFloat(numberTwo)
            for( i = 0 ; i < splitNumberOne[1].length ; i++ ){
                multiplicationDecimals += 1
                console.log('CLog slNuOne Loop ', multiplicationDecimals)
            }
            for(i = 0 ; i < intergerAnswer.length; i ++){
                if(intergerAnswer){
                    
                }
            }
            //Trying to get a loop over the interger answer going so that it gets to the point where the decimal places are to add in the decimal place and returns the correct answer. might be better if i go backwards here? Or i could do pop/push shift/unshift and create a new object to hold it.
            // console.log(parseFloat(recombinedNumberOne) * parseFloat(numberTwo))
        }
} else {
    let answer = parseFloat(numberTwo) * parseFloat(numberOne)
    console.log("answer ",answer)
}
}



Multiplication("12.1",'10')
// console.log(multiplicationDecimals)
// Multiplication('123.245','123.234')
// console.log(multiplicationDecimals)