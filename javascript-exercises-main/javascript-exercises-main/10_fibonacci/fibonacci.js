const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    let temp = 0;
    for(let i = 1; i <= num; i++){
        
        temp = b;
        b = a + b;
        a = temp;
    }
    if(temp <= 0){
        return "OOPS";
    }
    return temp;
    

    // if(num <= 1){
    //     return 1;
    // }
    // return fibonacci(num-1) + fibonacci(num-2);
};

console.log(fibonacci(2));


// Do not edit below this line
module.exports = fibonacci;
