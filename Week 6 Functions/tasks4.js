// 1.Write a program that checks if a given element e is in the array a.
//     Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

function check(array, n) {
    var result = '';
    for(var i = 0; i < array.length; i++) {
        if(array[i] === n) {
            result = 'Yes';
            break;
        }
        else {
            result = 'No';
        }
    }
    return result;
}

console.log(check([5, -4.2, 3, 7], 3)); 

// 2.Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiples(array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            newArray[newArray.length] = array[i] * 2;
        }
        else {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

console.log(multiples([-3, 11, 5, 3.4, -8]));


// 3.Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: 
// Output: -1, 3

function findMin(array) {
    var min = array[0];
    var index;
    for(var i = 0; i < array.length; i++) {
        var current = array[i];
        if(current < min) {
            min = current;
            index = i;
        }
    }
    console.log(min, index);
}

findMin([4, 2, 2, -1, 6]);

// 4.Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function secondMin(array) {
    var min = array[0];
    var secondMin = array[0];

    for(var i = 0; i < array.length; i++) {
        var currentNum = array[i];
        if(currentNum < min) {    
            min = currentNum;     
        }
        else if(currentNum < secondMin) {  
            secondMin = currentNum;
        }
    }
    return secondMin;
}

console.log(secondMin([4, 2, 2, -1, 6]));


// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumPositive(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumPositive([3, 11, -5, -3, 2]));

// 6.Write a program that checks if a given array is symmetric.An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

function symetric(array) {
    var message = '';
    for(var i = 0, j = array.length - 1; i <= array.length / 2; i++, j--) {
        if(array[i] === array[j]) {
            message = 'The array is symmetric';
        }
        else {
            message = "The array isn't symmetric";
        }
    }
    return message;
}

console.log(symetric([2, 4, -2, 7, -2, 4, 2]));


// 7.Write a program that intertwines two arrays.You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwines(array1, array2) {
    var newArray = [];
    for(var i = 0; i < array1. length; i++) {
        newArray[newArray.length] = array1[i];
        newArray[newArray.length] = array2[i];
    }
    return newArray;
}

console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));



// 8.Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenatesTwoArrays(array1, array2) {
    var newArray = [];
    for(var i = 0; i < array1.length; i++) {
        newArray[newArray.length] = array1[i];
    }
    for(var j = 0; j < array2.length; j++) {
        newArray[newArray.length] = array2[j];
    }

    return newArray;
}

console.log(concatenatesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));


// 9.Write a program that deletes a given element e from the array a.
//     Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deleteElement(array, n) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));


// 10.Write a program that inserts a given element e on the given position p in the array a.If the value of the position is greater than the array length, print the error message.
//     Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function program(array, index, n) {
    var message = 'ERROR !';
    var newArray = [];

    if(index > array.length) {
        return message;
    } else {        

        for(var i = 0; i < array.length; i++) {
            if(i === index) {
                newArray[newArray.length] = n;
            }
            newArray[newArray.length] = array[i];
        }
        
        return newArray;
    }
}

console.log(program([2, -2, 33, 12, 5, 8], 4, 78));