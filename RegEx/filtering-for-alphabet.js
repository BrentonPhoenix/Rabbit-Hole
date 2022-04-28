function allLetter (inputText){
    let letters = /^[A-Za-z]+$/
    //regex for alphabetical characters
    if (inputText.match(letters)){
        console.log(`"${inputText}" this does check for alphebetical characters`)
    } else {
        console.log(`"${inputText}" contains nonalphabetical characters`)
    }
}
let hasNumbers = '12345a'
// let isNumbers = 54321
let isLetters = "this"
let isSentence = "This is a sentence which includes spaces"
allLetter(hasNumbers)
// allLetter(isNumbers)
allLetter(isLetters)
allLetter(isSentence)