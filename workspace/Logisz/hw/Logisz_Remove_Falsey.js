'use strict';

let sample0 = [NaN, 0, 15, false, -22,'', "hey it's me", 
               undefined, 47, null, 2*false];


function Rem_False(array) {

    let ret_array = array;

    for (let i=0; i < array.length; i++) { 
        
        if(!array[i]){

            ret_array.splice(i,1);
            i--;

        }        

    } 

    return ret_array;

}    


console.log(Rem_False(sample0));
