const repeatString = function(word, num) {
    if(num < 0){
        return "ERROR";
    }
    let repeatWord = "";
    for(let i = 0; i < num; i++){
        repeatWord += word;
    }
    return repeatWord;

};

// Do not edit below this line
module.exports = repeatString;
