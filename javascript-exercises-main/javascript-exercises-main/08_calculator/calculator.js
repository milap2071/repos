const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(arr) {
  let totalSum = 0;
  for(let num of arr){
    totalSum = add(totalSum, num);
  }
  return totalSum;
	
};

const multiply = function(arr) {
  let totalMultiply = 1;
  for(let num of arr){
    totalMultiply *= num;
  }
	return totalMultiply;

};

const power = function(a, b) {
  let totalPower = a;
  for(let i = 1; i < b; i ++){
    totalPower *= a;
  }
  return totalPower;
	
};

const factorial = function(num) {
  let fact = 1;
  for(let i = num; i > 0; i--){
    fact = fact * i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
