// 1.Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var a = [2, 4, 7, 11, -2, 1];


function duplicateEachElement(a) {
    var emptyArray = [];
    for(var i = 0; i < a.length; i++) {
        emptyArray.push(a[i], a[i]);
        
    }
    return emptyArray;
}

console.log(duplicateEachElement(a));



// 2.Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]



var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var unique = array.filter(function (value, index) {
    return array.indexOf(value) === index;
});


console.log(unique); 


function removeDuplicate(array) {
    var emptyArray = [];
    for(var i = 0; i < array.length; i++) {
        if(!emptyArray.includes(array[i])) {
            emptyArray.push(array[i]);
        }
        
    }
    emptyArray.sort(function (a, b) { return a - b })
    return emptyArray;
}

console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



// 3.Write a function that checks if a given array has odd number of elements.
//     Input: [1, 2, 9, 2, 1]
// Output: true

function checksOdd(array) {
    return array.length % 2 !== 0;
}

console.log(checksOdd([1, 2, 9, 2, 1]));

// 4.Write a function that counts the number of elements less than the middle element.If the given array has an even number of elements, print out an error message.
//     Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var niz = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function getMiddleCount(array) {
    if(array.length % 2 === 0) {
        return 'The input array has an even number of elements';
    }
    else {
        var indexMiddle = Math.floor(array.length / 2);
        var newArray = [];
        
        newArray = array.filter(function (element) { 
            return element < array[indexMiddle]; 
        });
    } 
    return newArray.length;
}

console.log(getMiddleCount(niz));





// 5.Write a function that finds the smallest element of a given array.The function should return an object that contains the smallest value and its last position in the array.
//     Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

var array = [1, 4, -2, 11, 8, 1, -2, 3];

function smallestAndLast(array) {

    var min = Math.min(...array);
    var minIndex = array.lastIndexOf(min);

    return { min: min, minIndex: minIndex };
}

console.log(smallestAndLast(array)); 

// 6.Write a function that finds all the elements in a given array less than a given element.
//     Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array that start with the “pro” substring.The function should be case insensitive.
//     Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

var input = [2, 3, 8, -2, 11, 4];
var value = 6;

function lessThanGiven(array, given) {
    var filter = [];
        filter = array.filter(function (element) {
        return element < given;
    })
    return filter;
}

console.log(lessThanGiven(input, value)); 

/********************************************************** */


var inputArray = ['JavaScript', 'Programming', 'fun', 'product'];
var subString = 'Pro';

function findPro(array, term) {
    var newArray = array.filter(function (el) {
        return el.slice(0, term.length).toLowerCase() === term.toLowerCase();
    });

    return newArray;
}
console.log(findPro(inputArray, subString));


// 7.Write a function that expects an array and a callback function that filters out some of the elements.Use functions defined in a) or b) to test it.








// 8.Write a list(array) of products you usually buy in the supermarket.Write a price and name for each product.For example,
//     [
//         { name: ‘apples’, price: 100},
//         { name: ‘milk’, price: 80},
//         { name: ’bananas’, price: 150}
//     ]

var products = [{
    name: 'apples',
    price: 100
},
{
    name: 'milk',
    price: 80
},
{
    name: 'bananas',
    price: 150
}
];





// 9.Write a function that calculates the total price of your shopping list.

function calculateTotalPrice(shoppingList) {
    var total = 0
    shoppingList.forEach(function (e) {
        total += e.price;
    })
    return total;
}

console.log(calculateTotalPrice(products));

// Write a function that calculates the average product price of your shopping list.Print this value with the precision of three decimals.

function averagePrice(shoppingList) {
    var total = 0;
    var averagePrice = 0;

    shoppingList.forEach(function (e) {
        total += e.price;
    })
    averagePrice = total / shoppingList.length;
    return averagePrice;
}

console.log('Average price: ' + averagePrice(products).toFixed(3));


// Write a function that prints out the name of the most expensive product on your shopping list.Write the name in uppercase.

function mostExpensive(shoppingList) {
    var theMostExpensive;
    theMostExpensive = shoppingList.sort(function (a, b) {
        return b.price - a.price;
    })
    console.log(shoppingList[0].name.toUpperCase());
}

mostExpensive(products);


// 10.Write a function that checks if a given string is written in all capitals.

function isAllCapitals(string) {
    var newString = string;
    var bool = false;
    if(newString === newString.toUpperCase()) {
        var bool = true;
        return string;
    }
    return bool;
}

console.log(isAllCapitals('MILOS')); 

// Write a function that checks if a given string contains any digits.

function anyDigits(string) {
    var arrayOfstring = string.split('');
    for(var i = 0; i < arrayOfstring.length; i++) {
        if((parseInt(arrayOfstring[i]))) {
            return string;
        }
    }
        
    return false;
}

console.log(anyDigits('daliimabroj17')); 

/************************************************ */

function anyDigits2(string) {
    var arrayOfstring = string.split('');
    var novi = arrayOfstring.filter(function (el) {
        return parseInt(el); 
    })

    if(novi.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(anyDigits2('daliima17broj'));


// 11.Write a function that checks if a given string is a valid hexadecimal color.

function isHexadecimalColor(string) {
    var check = 'ABCDEF0123456789';
    var has = '#';
    var result = 0;
    if(string[0] === has) {
        if(string.length === 7) {
            for (var i = 0; i < check.length; i++) {
                var newArr = check.split('');
                if(newArr.includes(string[i])) {
                    result++; 
                }
            }
        
        }        
    }
    if(result === 6) {
        return true;
    }
    else {
        return false;
    }
    
}

console.log(isHexadecimalColor('#L35136'));


// Write a function that checks if a given number belongs to the interval from 1900 to 2018.


function checksInterval(num, start, end) {
    if (num >= start && num <= end) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checksInterval(1917, 1900, 2018));

// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function Validator(stringValidator, passwordValidator, colorValidator, year , start, end) {
    this.stringValidator = isAllCapitals(stringValidator);
    this.passwordValidator = anyDigits(passwordValidator) ;
    this.colorValidator = isHexadecimalColor(colorValidator);
    this.yearValidator = checksInterval(year, start, end)
}

var object1 = new Validator('MILOS', 'dadada', '#175986', 2000, 1900, 2018)

console.log(object1); 



// Write a function that calculates a number of days to your birthday.
//     Input: 25 February
// Output: 5 days

var birth = new Date('05/17/2021');


function daysToBirthday(birthday) {
    var today = new Date();
    var msInDays = 1000 * 3600 * 24;
    var d = birthday.getTime() - today.getTime();
    return d / msInDays;
}


var daysToBirth = Math.round(daysToBirthday(birth)); 
console.log((daysToBirth));


// Write a function that for a given departure and arrival time calculates the time the trip takes.
//     Input: 8: 22: 13 11: 43: 22
// Output: 3 hours 21 minutes 9 seconds




// Write a constructor function that creates points in space.Each point in space has its own x, y, and z coordinate.For example, (3, 5, 1) can be a point in space.



// Write a function that calculates the distance between two points in the space.



// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100.
// Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.



// Write a function that shuffles the elements of a given array.
//     Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11](it can be any random permutation of the given array)



