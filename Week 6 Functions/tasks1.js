//1. Write a program that calculates the maximum of two given numbers.
function max(a, b) {
    var s = 'The numbers are equal';
    if( a > b) {
        return a;
    }
    else if(b > a) {
        return b;
    }
    else {
        return s;
    }
}

console.log (max(20, 20));

//2. Write a program that checks if a given number is odd.
function isOdd(n) {
    if(n % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isOdd(6));

//3. Write a program that checks if a given number is a three digit long number.
function isThreeDigit(a) {
    if(a >= 100 && a < 1000 || a > -1000 && a <= -100 ) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isThreeDigit(10));

//4. Write a program that calculates an arithmetic mean of four numbers.

function arMean(a, b, c, d) {
    var sum = a + b + c + d;
    var arMean = sum / 4;
    return arMean;
}

console.log(arMean(2,24,12,10));

// 5.  Write a program that draws a square of a given size.For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****


function drawSquare(n) {
    var square = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                square += '* ';
            } else if (j === 0 || j === n - 1) {
                square += '* ';
            } else {
                square += '  ';
            }
        }
        square += '\n';
    }
    return square;
}

var square1 = drawSquare(3);

console.log(square1);


// 6. Write a program that draws a horizontal chart representing three given values.For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function horizontalChart2(num1, num2, num3) {
    var star = '';
    for (var i = 0; i < num1; i++) {
        star += '*';
    }
    star += '\n';
    for (var i = 0; i < num2; i++) {
        star += '*';
    }
    star += '\n';
    for (var i = 0; i < num3; i++) {
        star += '*';
    }
    return star;
}

console.log(horizontalChart2(3, 13, 3));






//7. Write a program that calculates a number of digits of a given number.

function numDigits(num) {
    var count = 0;
    var absNum = num;

    if(num < 0) {
        num *= -1;
    }

    for(var i = absNum; i >= 1; i/= 10) {
        count++;
    }
    return count;
}

console.log((numDigits(100)));

//8. Write a program that calculates a number of appearances of a given number in a given
// array.
//     Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;

function givNum(a, e) {
    var count = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i] === e) {
            count++;
        }
    }
    return count;
}

console.log(givNum(a, e));

//9. Write a program that calculates the sum of odd elements of a given array.
var a = [2, 4, 7, 8, 7, 7, 1];

function sumOdd(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i] % 2 === 1) {
            sum += a[i];
        }
    }
    return sum;
}

console.log(sumOdd(a));

//10. Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

function letterA(string) {
    count = 0;
    for(var i = 0; i < string.length; i++) {
        var lett = string[i];
        if(lett === 'a' || lett === 'A') {
            count++;
        }
    }
    return count;
}

console.log(letterA('Banana'));

//11. Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.


function conc(string, num) {
    var p = num;
    var help = '';
    for (var i = 0; i < p; i++) {
        help += string;
    }
    return help;
}

console.log(conc('Milos', 4));


var a = 4;
var b = 5;

c = a;

console.log(a);