//Write a JavaScript program to find the most frequent item of an array

function findMostFrequent(inputArr) {
    var elementObject = {};
    var maxCount = 0;
    var maxValue;
    var tempElement;
    for (var i = 0; i < inputArr.length; i++) {
        tempElement = inputArr[i];
        if (!elementObject.hasOwnProperty(tempElement)) {
            elementObject[tempElement] = 0;
        };
        ++elementObject[tempElement];

        if (elementObject[tempElement] > maxCount) {
            maxCount = elementObject[tempElement];
            maxValue = tempElement;
        };
    };
    return maxValue + ' ' + maxCount;
};

let testArr1 = [1, 'a', 1];
let testArr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(findMostFrequent(testArr1));
console.log(findMostFrequent(testArr2));

//Write a javascript program to iterate nested arrays, putting all items into a single, 1-dimension array

function createSingleArray(inputArr) {
    let newMainArr = [];
    let newSubArr = [];
  
    for (var i = 0; i < inputArr.length; i++) { 
      for (var x = 0; x < inputArr[i].length; x++) { 
          newMainArr.push(inputArr[i][x]);
      };
    };
    return newMainArr;
  };

let testArr3 = [[1, 2, 3], [4, 5, 6]];
let testArr4 = [[1], [2, 3], [4, 5, 6]];
  
console.log(createSingleArray(testArr3));
console.log(createSingleArray(testArr4));


//Write a JavaScript function to remove all falsey values ('null', '0', '""', 'false', 'undefined' and 'NaN') from an array

function removeFalseyValues(inputArr) {
    let inputArrayLength = inputArr.length;
    let newArr = [];
    for (let i = 0; i < inputArrayLength; i++) {
        if (inputArr[i]) {
            newArr.push(inputArr[i])
        };
    };
    return newArr;
};

let testArr5 = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(removeFalseyValues(testArr5));