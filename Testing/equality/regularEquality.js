//int
if (123 == '123'){
    console.log('if statement evaluated to true: regular equality (with single quotes)')
} else{
    console.log('if statement evaluated to false: strict equality (with single quotes)')
}


if (123 == "123"){
    console.log('if statement evaluated to true: regular equality(with double quotes)')
} else{
    console.log('if statement evaluated to false: strict regular equality')
}


if (123 == `123`){
    console.log('if statement evaluated to true: regular equality (with backticks)')
} else{
    console.log('if statement evaluated to false: strict equality (with backticks)')
}

if (true == 'true'){
    console.log('if statement evaluated to true: regular equality')
} else{
    console.log('if statement evaluated to false: strict equality')//with regular equality evaluates to false so false is not equal to "false" at all
}

//interesting that intergers evaluate to true under equality and false with strict equality and then boolean values evaluate to false in both cases.
//true == 'true' evaluates to false
//1 == '1' evaluates to true


// false

if (false == 'false'){
    console.log('if statement evaluated to true: regular equality (with single quotes)')
} else{
    console.log('if statement evaluated to false: strict equality (with single quotes)')//with regular equality evaluates to false so false is not equal to "false" at all
}


if (false == "false"){
    console.log('if statement evaluated to true: regular equality(with double quotes)')
} else{
    console.log('if statement evaluated to false: strict regular equality')//with regular equality evaluates to false so false is not equal to "false" at all
}


if (false == `false`){
    console.log('if statement evaluated to true: regular equality (with backticks)')
} else{
    console.log('if statement evaluated to false: strict equality (with backticks)')//with regular equality evaluates to false so false is not equal to "false" at all
}





//true
if (true == 'true'){
    console.log('if statement evaluated to true: regular equality (with single quotes)')
} else{
    console.log('if statement evaluated to false: strict equality (with single quotes)')
}


if (true == "true"){
    console.log('if statement evaluated to true: regular equality(with double quotes)')
} else{
    console.log('if statement evaluated to false: strict regular equality')
}


if (true == `true`){
    console.log('if statement evaluated to true: regular equality (with backticks)')
} else{
    console.log('if statement evaluated to false: strict equality (with backticks)')
}


//null

if (null == 'null'){
    console.log('if statement evaluated to true: regular equality (with single quotes)')
} else{
    console.log('if statement evaluated to false: strict equality (with single quotes)')
}


if (null == "null"){
    console.log('if statement evaluated to true: regular equality(with double quotes)')
} else{
    console.log('if statement evaluated to false: strict regular equality')
}


if (null == `null`){
    console.log('if statement evaluated to true: regular equality (with backticks)')
} else{
    console.log('if statement evaluated to false: strict equality (with backticks)')
}
//all evaluate to false


//undefined
if (undefined == 'undefined'){
    console.log('if statement evaluated to true: regular equality (with single quotes)')
} else{
    console.log('if statement evaluated to false: strict equality (with single quotes)')
}


if (undefined == "undefined"){
    console.log('if statement evaluated to true: regular equality(with double quotes)')
} else{
    console.log('if statement evaluated to false: strict regular equality')
}


if (undefined == `undefined`){
    console.log('if statement evaluated to true: regular equality (with backticks)')
} else{
    console.log('if statement evaluated to false: strict equality (with backticks)')
}

//all evaluate to false


//NaN
if (NaN == 'NaN'){
    console.log('if statement evaluated to true: regular equality (with single quotes)')
} else{
    console.log('if statement evaluated to false: strict equality (with single quotes)')
}


if (NaN == "NaN"){
    console.log('if statement evaluated to true: regular equality(with double quotes)')
} else{
    console.log('if statement evaluated to false: strict regular equality')
}


if (NaN == `NaN`){
    console.log('if statement evaluated to true: regular equality (with backticks)')
} else{
    console.log('if statement evaluated to false: strict equality (with backticks)')
}

