
// 1.	Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.

//     Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function filter(array) {
    var newArray = [];
    for (var i = 0, x = 0; i < array.length; i++) {
        if (isFinite(parseFloat(array[i]))) {
            newArray[x] = parseFloat(array[i]);
            x++;
        }
    }
    return newArray;
}
console.log(filter(["1", "21", undefined, "42", "1e+3", Infinity]));


//2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//     Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false - 2247”


var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

var string = '';

function skipping(array) {
    for(var i = 0; i < array.length; i++) {
        if(isFinite(array[i]) === true && array[i] !== null) {
            string += array[i];
        }
    }
    return string;
}

console.log(skipping(array)); 



// 3. Write a program to filter out falsy values from the array.

//     Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var emptyArray = [];

function filterFalsy(array) {
    for(var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) === true && array[i] != false && array[i] != null) {
            emptyArray[emptyArray.length] = array[i];
        }
    }
    return emptyArray;
}

console.log(filterFalsy(array));



// 4. Write a program that calculates a number of integer values in the array.

//     Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3


var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function countIntegers(array) {
    var count = 0;
    var converted;
    for (var i = 0; i < array.length; i++) { 
        converted = parseFloat(array[i]); 
        if (!isNaN(converted)) { 
            if (converted === parseInt(array[i])) { 
                count++;                      
            }
        }
    }
    return count;
}

var result = countIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(result);


// 5. Write a program that calculates a number of float values in the array.

//     Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2


var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function countIntegers(array) {
    var count = 0;
    var converted;
    for (var i = 0; i < array.length; i++) { 
        converted = parseFloat(array[i]); 
        if (!isNaN(converted)) { 
            if (converted !== parseInt(array[i])) { 
                count++;                       
            }
        }
    }
    return count;
}

var result = countIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(result);
