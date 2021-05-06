// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [9, 5, 11, 4]

var array = [4, 5, 11, 9];

(function (array) {

    var keeper = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = keeper;

})(array);

console.log(array);


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
//     Input: 4 5
// Output: 20

var result = (function (a, b) {
    return a * b;
})(4, 5);

console.log(result);


// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
//     Input: prograMming
// Output: progra ** ing, 2


var string = 'prograMming';

var letterStar = (function (newString) {
    var newString = '';
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'm' || string[i] === 'M') {
            newString += '*';
            counter++;
            continue;
        }
        newString += string[i];
    }
    return [newString, counter];

})(string);

console.log(letterStar);



// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
//     Input: pera peric
// Output: pera.peric@gmail.com


var email = (function (name, surname) {
    return name + '.' + surname + '@gmail.com'
})('pera', 'peric');

console.log(email);



// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
//     Input: 034
// Output: 28

var octalToDecimal = (function (num) {
    num = parseInt(num, 10);
    return num;
})(034);

console.log(octalToDecimal);


// 6. Write a function that checks if a given string is valid password.The password is valid if it
// is at least 6 characters long and contains at least one digit.The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
//     Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

var password = 'JSGuru123';

(function (pwd) {
    var numberCheck = false;
    var lengthCheck = (pwd.length >= 6);

    for (var i = 0; i < pwd.length; i++) {
        if (pwd[i] * 1 == pwd[i]) {
            numberCheck = true;
        }
    }

    if (numberCheck === true && lengthCheck === true) {
        console.log('Your password is cool!');
    } else {
        console.log('Your password is invalid!');
    }

})(password);


// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var array = [2, 8, 11, 4, 9, 3];

var isOdd = function (num) {
    if (num % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
}

var check = (function (inputArray, isOdd) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (isOdd(inputArray[i])) {
            newArray[newArray.length] = inputArray[i];
        }
    }
    return newArray;
})(array, isOdd);

console.log(check);