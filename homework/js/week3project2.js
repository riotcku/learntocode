'use strict'; // this is important pls no erase we'll go over it eventually

/**
  THE PROJECT
  given an array, finds the largest number in that array and returns it.
  @param
    numArray {array} the array to check for the largest number
  @return
    {number} the number that was the largest value in the array given.
*/
function findLargestNumber(numArray) {
  // TODO: write code to loop through the array and find the largest number here
  return 'idk' // clearly wrong, please replace with right code
}

const smallArr = [1, 23, 1, 139, 3];
const largeArr = generateRandomArray(100);

// below statements should output the correct answer
console.log('Largest number in the smallArr array is ', findLargestNumber(smallArr));
console.log('Largest number in the largeArr array is ', findLargestNumber(largeArr));

/**
  Don't edit this function, it is how the random array is generated.
  @param
    size {number} how large the array should be
  @return
    {array<number>} an Array of length <size> with random number ranging from 0 to 10000
*/
function generateRandomArray(size) {
  const arrToReturn = [];
  for (let i = 0; i < size; i++) {
    // push is a function property in arrays that appends an element to the end of the array
    arrToReturn.push(Math.floor(Math.random() * 10000));
  }
  return arrToReturn;
}
