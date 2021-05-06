//1. Write a program to insert a string within a string at a particular position(default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insert(string, str, n) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if(i === n) {
            newString += str;
        }
        newString += string[i];
    }
    return newString;
}

console.log(insert("My random string", "JS ", 10));


//2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

arraySkip = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function skip(array) {
    string = '';
    for(var i = 0; i < array.length; i++) {
        if (array[i] !== null && isFinite(array[i])) {
            string += array[i];
        }
    }
    return string;
}

console.log(skip(arraySkip));


//3. Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

var newArray = [];

function filterFalsy(array) {
    for(var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) === true && array[i] != false && array[i] != null) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

arraySkip = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterFalsy(arraySkip));

function filterFalsy2(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray[newArray.length] = array[i];            
        }
    }
    return newArray;
}


console.log(filterFalsy2(arraySkip));

//4. Write a function that reverses a number.The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverse(n) {
    var str = '' + n;
    var s = ''
    for(var i = str.length-1; i >= 0; i--) {
        s += str[i];
    }
    return parseInt(s);
}

console.log(reverse(12345));



//5. Write a function to get the last element of an array.Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
//     [7, 9, 0, -2], 2 -> [0, -2]

var a = [7, 9, 0, -2];
var b = 2;
function getLast(array, n) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if(i < array.length - n) {
            continue;
        }
        newArray[newArray.length] = array[i];
    }
    return newArray;
}

console.log(getLast(a, b));

//6. Write a function to create a specified number of elements with pre - filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function specFun(n, value) {
    value = value || null;
    var newArray = [];
    for(var i = 0; i < n; i++) {
        newArray[newArray.length] = value;
    }
    return newArray;
}

console.log(specFun(4));


//7. Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.


//     Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is half the sum of all of its positive divisors(including itself).

//         E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNumber(n) {
    sum = 0;
    result = '';
    for(var i = 0; i < n; i++) {
        if(n % i === 0) {
            sum += i;
        }
    }
    if(sum === n) {
        return result = n + " is perfect number";
    }
    else {
        return result = n + " is not perfect number";

    }
}

console.log(perfectNumber(7));

//8. Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function findWord(string, word) {
    var array = [];
    var count = 0;
    var x = 0;

    for (var i = 0; i <= string.length - word.length; i++) {
        var str = '';
        for (var j = 0; j < word.length; j++) {
            str += string[i + j];
        }
        array[x] = str;
        x++;
    }
    for (x = 0; x < array.length; x++) {
        if (array[x] === word) {
            count++;
        }
    }
    return count;
}


console.log(findWord('The quick brown fox', 'quick'));


//9. Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(string) {
    var newString = '';
    var newString2 = '';
    var index;
    for(var i = 0; i < string.length; i++) {
        if(i < 3) {
            newString += string[i];
        }
        if(string[i] === '@') {
            index = i;
        }
        if(index) {
            newString2 += string[i];
        }
    }
    return newString + '...' + newString2
}

console.log(hideEmail("myemailaddress@bgit.rs"));


//10. Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function findMostFrequent(arr) {
    var mostFrequent;
    var appearsOfMostFreq = 0;

    for(var i = 0; i < arr.length; i++) {
        var counter = 1;
        var sample = arr[i];

        for(var j = i + 1; j < arr.length; j++) {
            var currentElement = arr[j];

            if(sample === currentElement) {
                counter++;
            }
        }
        if(appearsOfMostFreq < counter) {
            mostFrequent = sample;
            appearsOfMostFreq = counter;
        }
    }
    console.log("The most frequent element is " + "'" + mostFrequent + "'" + " and it appeared " + appearsOfMostFreq + " times.");
}

findMostFrequent(arr);



