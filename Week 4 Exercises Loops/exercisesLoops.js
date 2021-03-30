//1.  Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

for(var i = 0; i < 15; i++) {
    if(i % 2 === 0) {
        console.log("Number " + i + " is even.");
    }
    else {
        console.log("Number " + i + " is odd")
    }
}

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for(var i = 0; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);




// 3. Write a program to compute the sum and product of an array of integers.
var array = [12, 5, 7, 4 , 17];

sum = 0;
p = 1

for(var i = 0; i < array.length; i++) {
    sum += array[i];
    p *= array[i];
}
console.log("Sum is " + sum + ", product is " + p);




// 4. Write a program which prints the elements of the following array as a single string.
// var x = [ '1', 'A', 'B', "c", "r", true, NaN, undefined];
var x = ['1', 'A', 'B', "c", "r" , true, NaN, undefined];

for(var i = 0; i < x.length; i++) {
    console.log(x[i]);
}

//5. Write a program that prints the elements of the following array.
// var a = [

//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
var result = '';

for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < a[i].length; j++) {
        result += a[i][j] + "\t";
    }
    result += "\n";
}

console.log(result);

//6. Write a program that outputs the sum of squares of the first 20 numbers.

var suma = 0;
for(var i = 0; i <= 20; i++) {
    suma = suma + (i * i);
} 
console.log(suma);

// 7. Write a program that computes average marks of the following students.Then use this
// average to determine the corresponding grade.

// David 80
// Marko 77
// Dany 88
// John 95
// Thomas 68
// The grades are computed as follows :

// < 60 % -  F
// < 70 % -  D
// < 80 % -  C
// < 90 % -  B
// < 100 % - A

var niz = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var avg = 0;

for (var i = 0; i < niz.length; i++) {
    avg += niz[i][1]; // niz 0 pa ulazi u 1, pa niz 1 pa opet u 1, pa 2 pa opet u njegov 1 itd..
    var average = avg / niz.length;
}

if (average < 60 && average >= 50) {
    console.log('F');
}
else if (average < 70) {
    console.log('D');
}
else if (average < 80) {
    console.log('C');
}
else if (average < 90) {
    console.log('B');
}
else if (average < 100) {
    console.log('A');
}
else {
    console.log('Not between 50 and 100');
}

// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions.For numbers divisible by 3, print Fizz  instead of the number, and for numbers
// divisible by 5(and not 3), Buzz instead.When you have that working, modify your
// program to print FizzBuzz, for numbers that are divisible by both 3 and 5(and still print
//     Fizz  or Buzz  for numbers divisible by only one of those).


for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    }
    else {
        if (i % 5 === 0 && i % 3 !== 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}



for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz')
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(i);
    }
}
