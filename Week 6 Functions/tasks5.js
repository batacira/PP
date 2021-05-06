// 1.Find the min and max element in the following array and switch their places.Print out the modified array in the console.
//     Input: [3, 500, 12, 149, 53, 414, 1, 19]
// Output: [3, 1, 12, 149, 53, 414, 500, 19]

function switchPlaces(array) {
    var min = array[0];
    var max = array[0];
    var indexMin;
    var indexMax;
    for(var i = 0; i < array.length; i++) {
        var current = array[i];
        if(current < min) {
            min = current;
            indexMin = i;
        }
        if(current > max) {
            max = current;
            indexMax = i;
        }
    }

    array[indexMin] = max;
    array[indexMax] = min;
    
    return(array); 
}
var arr = [3, 500, 12, 149, 53, 414, 1, 19]
var modifiedArray = switchPlaces(arr);
console.log(modifiedArray);

// 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input: [3, 500, -10, 149, 53, 414, 1, 19]
// Output: [6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5]

function dividing2AndAdding5(array) {
    var result;
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        var current = array[i];
        result = current / 2 + 5;
        if(result === 0) {
            result = 20;
        }
        newArray[newArray.length] = result;
    }
    return newArray;
}

console.log(dividing2AndAdding5([3, 500, -10, 149, 53, 414, 1, 19]));

// 3.Initialize two arrays.The first one should contain student names, the second one the number of points for each student.Display students' names with their corresponding grade. Use the following ranges:
// 51 - 60 -> 6,
//     61 - 70 -> 7,
//     71 - 80 -> 8,
//     81 - 90 -> 9,
//     91 - 100 -> 10.
// Input:
// ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function studentsGrade(namesArray, pointsArray) {
    var newArray = [];
    var j = 0;
    var gradeArray = [];

    for (var i = 0; i < pointsArray.length; i++) {
        if (pointsArray[i] <= 50) {
            grade = 'failed to complete the exam.';
        } else if (51 <= pointsArray[i] && pointsArray[i] <= 60) {
            grade = 'earned 6.';
        } else if (61 <= pointsArray[i] && pointsArray[i] <= 70) {
            grade = 'earned 7.';
        } else if (71 <= pointsArray[i] && pointsArray[i] <= 80) {
            grade = 'earned 8.';
        } else if (81 <= pointsArray[i] && pointsArray[i] <= 90) {
            grade = 'earned 9.';
        } else {
            grade = 'earned 10.';
        }
        gradeArray[i] = grade;
    }

    for (var i = 0; i < namesArray.length; i++) {
        newArray[j] = [namesArray[i] + ' acquired ' + pointsArray[i] + ' points and ' + gradeArray[i]];
        j++;
    }
    return newArray;
}


var namesArray = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var pointsArray = [50, 39, 63, 72, 99, 51, 83, 59];

console.log(studentsGrade(namesArray, pointsArray));

// 4.(skip : )) Sort a previously defined array.Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [13, 11, 15, 5, 6, 1, 8, 12]
// Output: [2, 10, 12, 16, 22, 24, 26, 30]

var arr = [13, 11, 15, 5, 6, 1, 8, 12];

function selectionSortMultipliedBy2(array) {
    var temp;

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }

    for (var i = 0; i < array.length; i++) {
        var min = array[i];
        var indexOfMin = i;

        for (var j = i; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                indexOfMin = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[indexOfMin] = temp;
    }
    return array;
}


console.log(selectionSortMultipliedBy2(arr));

//     5.(skip : )) Sort a previously defined array in a descending order and display it in the console.
//         Input: [13, 11, 15, 5, 6, 1, 8, 12]
// Output: [15, 13, 12, 11, 8, 6, 5, 1]

var arr = [13, 11, 15, 5, 6, 1, 8, 12];

function selectionSortDescendingOrder(array) {
    var temp;
    for (var i = 0; i < array.length; i++) {
        var max = array[i];
        var indexOfMax = i;

        for (var j = i; j < array.length; j++) {
            if (array[j] > max) {
                max = array[j];
                indexOfMax = j;
            }

        }
        temp = array[i];
        array[i] = max;
        array[indexOfMax] = temp;
    }
    return array;
}

console.log(selectionSortDescendingOrder(arr));

// 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.The result should then be multiplied by 12.5 and displayed in console.
//     Output: 2350000

function program() {
    var sum = 0;
    var sum2 = 0;
    var result;
    for(var i = 0; i <= 1000; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }
    for(var j = 0; j <= 500; j++) {
        if(j % 2 === 1) {
            sum2 += j;
        }
    }

    return result = (sum - sum2) * 12.5
}

console.log(program());

// 7.Define a 10 element array.Take the first two letters from every string(that has at least 2 letters) in the array and create a new string from them.Print it out in the console.
//     Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]

// Output: AnStJoJoDaMa

function twoLetters(array) {
    var string = '';
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            if (array[i].length > 1) {
                string += array[i][0] + array[i][1];
            }
        }
    }
    return string;
}

console.log(twoLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"])); 


// 8.Write a program that takes a string and prints its characters out in reversed order in the console.
//     Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversedString(string) {
    var newString = '';
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

var string = 'Belgrade Institute of Technology';

console.log(reversedString(string));

// 9.Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function combinationsOfTwo(num) {
    var array = [];
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            if (i !== j)
                array[array.length] = [i, j];
        }
    }
    return array;
}

var n = 7;

console.log(combinationsOfTwo(n));

// 10.Write a program that checks if the entered number is a prime number(i.e.divisible only by 1 and by itself).
//     Input: 17 | 15
// Output: true | false

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

var num = -15;
console.log(isPrime(num));

// 11.Check if a given string is a palindrome(spaces are ignored).
//     Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

function isPalindrome(string) {
    var newString = '';
    var result = true;

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            newString += string[i];
        }
    }

    for (var start = 0, end = newString.length - 1; start < end; start++, end--) {
        if (newString[start] !== newString[end]) {
            result = false;
        }
    }

    return result;
}

var string = 'a nut for a jar of tuna';

console.log(isPalindrome(string));

// 12.Write a program that calculates the greatest common divisor of two integers.Note: The greatest common divisor of two non - zero integers is the greatest positive number that divides both numbers with no remainder.
//     Input: 192 42 | 81 9
// Output: 6 | 9


function greatestCommonDivisior(num1, num2) {
    var divisior = 'Numbers don\'t have common divisior.';

    for (var i = 2; i < 1000; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisior = i;
        }
    }
    return divisior;
}

var num1 = 192;
var num2 = 42;

console.log(greatestCommonDivisior(num1, num2));