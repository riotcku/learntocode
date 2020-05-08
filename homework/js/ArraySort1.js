'use strict'; // this is important pls no erase

/**
  Don't edit this function, it is how the random array is generated.
  @param
    size {number} how large the array should be
  @return
    {array<number>} an Array of length <size> with random number ranging from 0 to 10000
*/
const generateRandomArray = (size) => {
  const arrToReturn = [];
  for (let i = 0; i < size; i++) {
    arrToReturn.push(Math.floor(Math.random() * 10000));
  }
  return arrToReturn;
}


const smallArr = [1, 23, 1, 139, 3];
const largeArr = generateRandomArray(1000);

// write a function below that sorts an array of numbers
// from smallest to largest and use it to sort the above two arrays.
// Do not use the javascript method .sort().
