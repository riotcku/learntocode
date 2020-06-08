'use strict';

const sampleArrOne = [1, 'a', 1];
const sampleArrTwo = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


// i should probably rewrite this using a map()?. need to revisit this :p
const findMostFrequent = (array) => {
  let currentVal;
  let frequencyObj = {};
  
  // iterate through array. check if the current element is a 'key' in the frequencyObj. if the key exists. increase the value.
  for (let i = 0; i < array.length; i++){
    currentVal = array[i];
    let frequencyObjKeys = Object.keys(frequencyObj)
    let hasKeys = frequencyObjKeys.includes(currentVal) //boolean value
   
    if (frequencyObjKeys[currentVal] || hasKeys) {      //had to insert both conditions because first condition was not capturing 'a' and hasKeys was not capturing numbers
      frequencyObj[currentVal] += 1;
    }
    
    else {
      frequencyObj[currentVal] = 1;
    }
  }
  
  let frequencyObjValues = Object.values(frequencyObj)
  let biggestValue;
  
  
  // find the biggest value i.e most frequent
  for (let i = 0; i < frequencyObjValues.length; i++){
    if (biggestValue === undefined){      // for first iteration while biggest value is undefined.
      biggestValue = frequencyObjValues[i]
    }
    else if (biggestValue < frequencyObjValues[i]){
      biggestValue = frequencyObjValues[i]
    }
  }

  //find the key associated with the biggest value
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  let biggestKey = getKeyByValue(frequencyObj, biggestValue)
  let bigArr = [biggestKey, biggestValue];
  return bigArr;  //return array of biggest key and value
}

console.log(findMostFrequent(sampleArrTwo))

const nestedNumArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let arrayCombiner = (nestedArr) => {
  let combinedArr = nestedArr[0]
  
  //go through the nested array and concat then splice the element at index 1. 
  for (let i = 0; i < nestedArr.length; i++){
    let firstArr = nestedArr[0]
    let nextArr = nestedArr[1]
    
    //check if both are arrays. then concat the two and splice
    if (Array.isArray(firstArr) && Array.isArray(nextArr)){
      combinedArr = combinedArr.concat(nextArr);
      nestedArr.splice(1, 1)
    }
  }
  return combinedArr;
}
console.log(arrayCombiner(nestedNumArr))


const falseyArr = [NaN, 0, 15, false, -22, '', undefined, 47, null]

let removeFalsey = (array) => {
  for (let i = 0; i < array.length; i++){
    if (!Boolean(array[i])){
      array.splice(i,1)
    }
    if (array[i] === undefined){ 
      array[i] = 1;               // was having problems with undefined being spliced from the array so instead im just changing the value and splicing from there
      array.splice(i,1)
    }
  }
  return array; 
}
console.log(removeFalsey(falseyArr))
