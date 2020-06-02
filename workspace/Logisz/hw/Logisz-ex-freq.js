'use strict';

let sample0 =  [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
let sample1 = ['duck','duck','duck','goose','run','run','run','caught'];
let sample2 = [1,1,1,2,2,5,2,'x',15,3,3,15,3,4,4,4,6,10,14,15];
let sample3 = [2,2,3,3];
let sample4 = [4,4];
let sample5 = [5];
let sample6 = [];

//Create and return object with unique properties found and how many instances of them.
function countType(arr) {
    
    let array = arr.slice();
    let store = {};

    for (let i=0; i < array.length; i++) { 

        if (array[i] == null) null
            
        else {
        store[array[i]] = 1;
        }
        for (let j=1; (i+j) < array.length; j++) {
            
            if (array[i] == null) break
            
            else if (array[i] == array[i+j]) {
                store[array[i]]++;
                array[i+j] = null;                                     
            }
        }  
    }  

    return store;     
}

//Checks object for property(ies) with the highest numeric value and returns array of property names.
function freq(obj) {

    let props = Object.getOwnPropertyNames(obj);
    let high = [props[0]];
    let top = obj[props[0]];
    let val = 0;
    

    for (let i = 0; i < props.length; i++) {
        
        for(let j=1; j < props.length; j++) {
        
            //Execute if next property value is higher than the current property value and the recorded top value.
            if ( (obj[props[i]] < obj[props[i+j]]) && (top < obj[props[i+j]]) ) {

                high[val] = props[i+j];
                top = obj[props[i+j]];

            }

            //Execute if current value is equal to next value, the property is different, and the top value is less than or equal to next value.
            else if ( (obj[props[i]] === obj[props[i+j]]) && (props[i] !== props[i+j]) && (top <= obj[props[i+j]]) ) {
                
                let skip = false;
                
                //Checks for existing properties against those already recorded.
                for (let k = 0; k < high.length; k++) {
                    if (high[k] === props[i+j]) {
                        skip = true;
                        continue;
                    }                    
                }     
                
                //Execute if property with high value already added.
                if (skip === true) continue
                    
                

                //If property with high value exists, add new array index point with new property name.
                val++;
                high[val] = props[i+j]; 
                top = obj[props[i+j]];                               
            }
        }
    }
    
    return high;

}

console.log(freq(countType(sample0)));
console.log(freq(countType(sample1)));
console.log(freq(countType(sample2)));
console.log(freq(countType(sample3)));
console.log(freq(countType(sample4)));
console.log(freq(countType(sample5)));
console.log(freq(countType(sample6)));

console.log(countType(sample1));
