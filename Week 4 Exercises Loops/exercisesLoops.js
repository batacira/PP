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


//6. Write a program that outputs the sum of squares of the first 20 numbers.

var suma = 0;
for(var i = 0; i <= 20; i++) {
    suma = suma + (i * i);
} 
console.log(suma);

