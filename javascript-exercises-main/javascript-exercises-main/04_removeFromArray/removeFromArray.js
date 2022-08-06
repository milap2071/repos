const removeFromArray = function (...args) {
  // for(let i = 0; i < arr.length; i++){
  //     for(let j = 0; j < args.length; j++){
  //         if(arr[i] === args[j]){
  //             console.log(arr.splice(i, 1));
  //             i--;
  //         }
  //     }

  // }
  // return arr; //this will change the original arr, so better to copy it to new.

  const array = args[0];
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

console.log("check:" + removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
