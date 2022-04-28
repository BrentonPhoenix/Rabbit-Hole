
let control = Math.floor(Math.random() * 10) + 1;
let asAFunction = () => Math.floor(Math.random() * 10) + 1

console.log('first we call the control ', control)
console.log('then we call asAFunction ', asAFunction())
console.log('2 we call the control ', control)
console.log('2 we call asAFunction ', asAFunction())
console.log('3 we call the control ', control)
console.log('3 we call asAFunction ', asAFunction())
console.log('4 we call the control ', control)
console.log('4 we call asAFunction ', asAFunction())

//so if we set the randomizer to a variable to get a different result we MUST make it a function in a variable.


// RESULTS!!!!!!!


// first we call the control  3
// then we call asAFunction  8
// 2 we call the control  3
// 2 we call asAFunction  6
// 3 we call the control  3
// 3 we call asAFunction  10
// 4 we call the control  3
// 4 we call asAFunction  2

