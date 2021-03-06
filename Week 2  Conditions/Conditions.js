//1.Write a program that compares two numbers and display the larger. Result should be displayed in the console.

var a = 18;
var b = 17;

if(a > b) {
    console.log(a);
}
else if(b > a) {
    console.log(b);
}
else {
    console.log("Equal");
}

//2. Write a program to check if the number is divisible by 2. If it is, print even, if not,print odd.

var c = 11;

if(c % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//3.Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

a = 30;

if(a % 3 === 0 && a % 5 === 0) {
    console.log(a);
}


//4.Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign

var num1 = -3, num2 = -5, num3 = -10;
var message = "";

if((num1 * num2 * num3) < 0) {
    message = "The sign is -";
}
else {
    message = "The sign is +";
}

console.log(message);

// 5.Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
var vrjbl = 12;
if(typeof vrjbl === "number") {
    if(vrjbl % 2 === 0) {
        console.log(vrjbl);
    }
    else {
        console.log("X");
    }
}

// 6.Write a conditional statement to find the largest of five numbers. Display the result in console.
var n = 11;
var m = 15;
var o = 17;
var p = -5;
var s = 0;

if ( n > m && n > o && n > p && n > s) {
    console.log(n);
}
else if (m > n && m > o && m > p && m > s) {
    console.log(m);
}
else if (o > n && o > m && o > p && o > s) {
    console.log(o);
}
else if (p > n && p > m && p > o && p > s) {
    console.log(p);
}
else {
    console.log(s);
}

//7.Write a conditional statement to sort three numbers.
var r = 555;
var t = 212;
var u = 312;
if(r > t && r > u && t > u) {
    console.log(r, t, u);
}
else if(r > t && r > u && u > t) {
    console.log(r, u, t);
}
else if(t > r && t > u && r > u) {
    console.log(t, r, u);
}
else if(t > r && t > u && u > r) {
    console.log(t, u, r);
}
else if(u > r && u > t && r > t) {
    console.log(u, r ,t);
}
else if(u > r && u > t && t > r) {
    console.log(u, t, r);
}
else {
    console.log("Nisu svi brojevi razliciti");
}
//2. nacin

var x = 450, y = 1115, z = 480;

if(x > y && x > z){
    if(y > z){
        console.log (x, y, z);
    } else {
        console.log (x, z, y);
    }
} else if(y > x && y > z) {
    if(x > z){
        console.log (y, x, z);
    } else {
        console.log (y, z, x);
    }
} else {
    if(x > y) {
        console.log (z, x, y);
    } else {
        console.log (z, y, x);
    }
}

// 8. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. Formula: F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
//Sample Input: 60°C 
//Output : 60°C is 140 °F
var F;
var C = 60;

if(F === undefined ) {
    F = (9 * C/5) + 32;
    console.log(C + " stepeni celzijusovih su " + F + " farenhajta");
}else{
    C = (F - 32) / 1.8;
    console.log(F + " stepeni farenhajta su " + C + " celzijusa");
}


// 9. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38

var num = 17;
var thirteen = 13;
var difference;

if(num < thirteen) {
    difference = thirteen - num ;
    console.log("Razlika izmedju " + num + " i " + thirteen + " je " + difference);
}
else if(num > thirteen) {
    difference = (num - thirteen) * 2;
    console.log("Double difference betwen that number and 13 is " + difference);
}

// 10. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.

var num1 = 10, num2 = 22;

if(num1 === num2) {
    console.log((num1 + num2) * 3);
}
else {
    console.log(num1 + num2);
}

// 11.Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.

var num1 = 25, num2 = 50, sum = num1 + num2;

if(sum === 50 || num1 === 50 || num2 === 50) {
    console.log(true);
}

// 12. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

var num = 1111;

if(num < 20) {
    console.log("less than 20");
}
else if(num >= 20 && num <= 100) {
    console.log("20 <=> 100");
}
else if(num >= 100 && num <= 400) {
    console.log("100 <=> 400");
}
else {
    console.log("Greater than 400");
}