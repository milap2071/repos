const sumAll = function(a, b) {
    if(typeof a != "number" || typeof b != "number" || a < 0 || b < 0){
        return "ERROR";
    }
    let min = 0;
    let max = 0;

    if(a > b){
        max = a;
        min = b;
    } else{
        max = b;
        min = a;
    }

    let totalSum = 0;
    for (i = min; i <= max ; i++){
        totalSum += i;
    }
    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
