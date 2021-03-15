// 1. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. Print output in console.
// For input 1, output should be “Monday”.

var day = 4;

switch (day) {
    case 1: console.log("Monday");

        break;
    case 2: console.log("Tuesday");

        break;
    case 3: console.log("Wednesday");

        break;
    case 4: console.log("Thursday");

        break;
    case 5: console.log("Friday");

        break;
    case 6: console.log("Saturday");

        break;
    case 7: console.log("Sunday");

        break;

}

// 2. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var dy = 14;

switch (dy) {
    case 1: console.log("Monday");

        break;
    case 2: console.log("Tuesday");

        break;
    case 3: console.log("Wednesday");

        break;
    case 4: console.log("Thursday");

        break;
    case 5: console.log("Friday");

        break;
    case 6: console.log("Saturday");

        break;
    case 7: console.log("Sunday");

        break;
    default: console.log("Input must be a number between 1 and 7");

        break;

}



// 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

var d = 17;

switch (d) {
    case 1: console.log("It’s weekday");

        break;
    case 2: console.log("It’s weekday");

        break;
    case 3: console.log("It’s weekday");

        break;
    case 4: console.log("It’s weekday");

        break;
    case 5: console.log("It’s weekday");

        break;
    case 6: console.log("It’s weekend");

        break;
    case 7: console.log("It’s weekend");

        break;
    default: console.log("Input must be number between 1 and 7")

}

// 4. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var month = 12;
var message = "";

switch (month) {
    case 1: message = "January";

        break;
    case 2: message = "February";

        break;
    case 3: message = "March";

        break;
    case 4: message = "April";

        break;
    case 5: message = "May";

        break;
    case 6: message = "June";

        break;
    case 7: message = "July";

        break;
    case 8: message = "August";

        break;
    case 9: message = "September";

        break;
    case 10: message = "October";

        break;
    case 11: message = "November";

        break;
    case 12: message = "December";

        break;

    default: message = "Input must be a number between 1 and 12"
}
console.log(message);

// 5. Write a program that for a 1 - 12 number input(representing a month in a year) shows what
// season it is.All inputs different from 1 - 12 output a message explaining that input must be a
// number between 1 and 12.
season = 122;
message3 = "";

switch (season) {
    case 3:
    case 4:
    case 5:
        message3 = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        message3 = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        message3 = "Autumn";
        break;
    case 12:
    case 1:
    case 2:
        message3 = "Winter";

        break;

    default: message3 = "Input must be a number between 1 and 12"

}

console.log(message3);

/*  
6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - "Good job", B - "Pretty good", C - "Passed", D-"Not so good", F-"Failed"
Input different from letters A-F outputs a message
"Unknown grade".
*/

var grade = "A";
var message1 = "";

switch (grade) {
    case "A": message1 = "Good job"

        break;
    case "B": message1 = "Pretty good"

        break;
    case "C": message1 = "Passed"

        break;
    case "D": message1 = "Not so good"

        break;
    case "F": message1 = "Failed"

        break;

    default: message1 = "Unknown grade";
        break;
}

console.log(message1);

//7.

var city = "Nis";
var message2 = "";

switch (city) {
    case "Nis":
    case "Beograd":
    case "Novi Sad":
    case "Kragujevac":
    case "Pirot":
        message2 = "Serbia";
        break;
    case "Sarajevo":
    case "Banja Luka":
    case "Tuzla":
    case "Zenica":
        message2 = "Bosnia and Herzegovina";
        break;
    case "Skopje":
    case "Stip":
    case "Ohrid":
        message2 = "North Macedona";
        break;
    case "Maribor":
    case "Ljubljana":
        message2 = "Slovenia";
        break;
    case "Podgorica":
        message2 = "Montenegro";
        break;

    default: message2 = "Please choose a different city";
        break;
}
console.log(message2);

// 8. Write a program that takes as input two numbers and a string denoting the operation(“+”, “-
//     ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 10;
var b = 2;
var op = "/";
switch (op) {
    case "+": console.log(a + b);
        break;
    case "-": console.log(a - b);
        break;
    case "*": console.log(a * b);
        break;
    case "/": console.log(a / b);
        break;
}