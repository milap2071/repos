const reverseString = function(word) {
    let reverseWord = word.split('').reverse().join('');
    // for(let i = 1; i <= word.length; i++){
    //     console.log(word.charAt(word.length -i));
    //     reverseWord += word.charAt(word.length - i);
    // }
    return reverseWord;

};

// reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
