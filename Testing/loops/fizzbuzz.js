for(i = 0 ; i <= 100; i+= 2 ){
    if(i % 3 === 0 && i % 5 === 0 && i % 8 === 0){
        console.log(i, "fizz buzz bazz")
    }
    else if(i % 3 === 0 && i % 5 === 0){
        console.log(i, "fizz buzz")
    }
    else if( i % 3 === 0){
        console.log(i,"fizz")
    }
    else if( i % 5 === 0){
        console.log(i,"buzz")
    }
    else if( i % 8 === 0){
        console.log(i,"bazz")
    }
    else{
        console.log(i)
    }
}