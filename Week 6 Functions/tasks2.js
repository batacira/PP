//1. Write a function to check whether the`input` is a string or not.

// "My random string" -> true
// 12 -> false

function isString(input) {
    if (typeof input === 'string') {
        return true;

    } else {
        return false;
    }
}

console.log(isString(5));


//2. Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlank(input) {
    var blank = " ";
    if (input === blank) {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank('Random text'));

//3. Write a function that concatenates a given string n times(default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concat(string, n) {
    n = n || 1;
    var con = '';
    for (var i = 0; i < n; i++) {
        con += string;
    }
    return con;
}

console.log(concat(4));

//4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function numOfLetter(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(numOfLetter('mamamam', 'm'));


//5. Write a function to find the position of the first occurrence of a character in a string.The result should be the position of character.If there are no occurrences of the character, the function should return -1.

function firstOcc(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }
    return -1;
}

var result = firstOcc('rapapa', 'p');
console.log(result);

//6. Write a function to find the position of the last occurrence of a character in a string.The result should be in human numeration form.If there are no occurrences of the character, function should return -1.

function lastOcc(string, letter) {
    var position = 0;
    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === letter) {
            position = i;
            break;
        }
        else {
            position = -1;
        }
    }
    return position;
}

console.log(lastOcc("xfunction to find the position", "x"));


//7. Write a function to convert string into an array.Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

var string = "Random";

function stringIntoArray(string) {
    var array = [];
    var empty = " ";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === empty) {
            array[array.length] = null;
        } else {
            array[array.length] = string[i];
        }
    }
    return array;
}

console.log(stringIntoArray(string));

//8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
//     Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(num) {
    if (num === 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}

console.log(prime(17));



//9. Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function replaceSpaces(string,separator) {
    var space = ' ';
    var newString = '';
    separator = separator || false;
    if (separator === false) {
        separator = '-';
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] === space) {
            newString += separator;
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}
console.log(replaceSpaces("My random string"));



//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function addDots(string, n) {
    var newString = '';
    for(var i = 0; i < string.length; i++) {
        if(i === n) {
            newString += '...'
            break;
        }else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(addDots("Write a function that converts", 20));

//11 Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function convertStringsToNumbers(stringArray) {
    var numArray = [];

    for (var i = 0; i < stringArray.length; i++) {
        var converted = parseFloat(stringArray[i]);

        if (isFinite(converted)) {
            numArray[numArray.length] = converted;
        }
    }
    return numArray;
}

var stringArray = ["1", "21", undefined, "42", "1e+3", Infinity];

console.log(convertStringsToNumbers(stringArray));


//12. Write a function to calculate how many years there are left until retirement based on the year of birth.Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retired(birth, year, sex) {
    var m = 65;
    var w = 60;
    var job = year - birth;
    var y;
    if(sex === 'm') {
        if(job < m) {
            y = m - job;
            console.log(y + ' years left to retirement');
        }
        else {
            console.log('You are retired. Enyou !');
        }
    }
    else if(sex === 'w') {
        if (job < w) {
            y = w - job;
            console.log(y + ' left to retirement');
        }
        else {
            console.log('You are retired. Enyou women!');
        }
    }
}

retired(1963, 2021, 'w');

//13. Write a function to humanize a number(formats a number to a human - readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function humanize(number) {
    if (number % 100 >= 11 && number % 100 <= 13)
        return number + "th";

    switch (number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }

    return number + "th";
}
console.log(humanize(3));
