'use strict';

let sample0 = [];
let sample1 = [[1],[2,3],[4,5,6]];
let sample2 = [['a1'],[6,3],[4,100,6]];




function FirstDim(array) {

    function explode(array) {

        let D = [];
    
        for (let i=0; i < array.length; i++) { 
    
            D.push(array[i]);
    
        }    
    
        return D;
    
    }

    let D1 = [];

    for (let i=0; i < array.length; i++) {     

        if(Array.isArray(array[i])){
            D1 = D1.concat(explode(array[i]));
        }
        else{
            D1.push(array[i]);
        }
    }
    return D1;    
}

console.log(FirstDim(sample0));
console.log(FirstDim(sample1));
console.log(FirstDim(sample2));