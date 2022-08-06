const palindromes = function (word) {
    
    let newWord = word.replace(/[^\p{L}\p{N}\s]/gu, '').replace(/\s+/g, '').toLowerCase();
    let checkWord = newWord.split("").reverse().join("");
    // for(let i = 1; i <= newWord.length; i++){
    //     checkWord += newWord[newWord.length-i];
    // }
    
    console.log(newWord);
    console.log(checkWord);
    return (newWord == checkWord);

};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
