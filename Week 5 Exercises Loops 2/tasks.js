// 1. Write a messagerogram that checks if a given element e is in the array a.
//     Inmessageut: e = 3, a = [5, -4.2, 3, 7]
// Outmessageut: yes
// Inmessageut: e = 3, a = [5, -4.2, 18, 7]
// Outmessageut: no


var e = 3;
a = [5, -4.2, 3, 7];
message = '';


for (var i = 0; i < a.length; i++) {
        if(e === a[i]) {
            message = 'Yes';
            break;
        }else {
            message = 'No';
        }
        
        }
                
    console.log(message);




// 2. Write a messagerogram that multimessagelies every messageositive element of a given array by 2.
// Inmessageut array: [-3, 11, 5, 3.4, -8]
// Outmessageut array: [-3, 22, 10, 6.8, -8]


var array = [-3, 11, 5, 3.4, -8];
var m = 0;
var newArray = [];
for (i = 0; i < array.length; i++) {

    if (array[i] > 0) {
        m = array[i] * 2;
        newArray[i] = m  ;
    } else {
        newArray[i] = array[i];
    }

}

console.log(newArray);





// 3. Write a messagerogram that finds the minimum of a given array and messagerints out its value and
// index.
// Inmessageut array: [4, 2, 2, -1, 6]
// Outmessageut: -1, 3

var niz = [4, 2, 2, -1, 6];
var najmanji = niz[0];
var index = 0;

for(var i = 0; i < niz.length; i++) {
    if(niz[i] < najmanji) {
        najmanji = niz[i];
        index = i;
    }
}
console.log('Najmanji broj u nizu je ' + najmanji + ' a index tog broja je ' + index);



// 4. Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2
var arr = [4, 2, 2, -1, 6]
var min = arr[0]
var nextMin = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
for (var i = 1; i < arr.length; i++) {
    if (nextMin > arr[i] && arr[i] !== min) {
        nextMin = arr[i];
    }
}
console.log(nextMin)


//5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var array = [3, 11, -5, -3, 2];
var sum = 0;

for(var i = 0; i< array.length; i++) {
    if(array[i] > 0) {
        sum += array[i];
    }
}
console.log(sum);

//6.Write a program that checks if a given array is symmetric. An array is symmetric if it can
//be read the same way both from the left and the right hand side.
var p = 0;
var array = [2, 4, -2, 7, -2, 4, 2];
for (i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        p = 1;
    }
}
if (p === 0) {
    console.log("The array is symmetric");
} else {
    console.log("The array isn’t symmetric");
}


//7.Write a program that intertwines two arrays. You can assume the arrays are of the same
//length.
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];

newArray = []

for (var i = 0; i < array1.length; i++) {
    newArray[newArray.length] = array1[i];
    newArray[newArray.length] = array2[i];
}
console.log(newArray);



// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];

var newArray = array1

for (i = 0; i < array2.length; i++) {
    newArray[newArray.length] = array2[i];
}

console.log(newArray);

// 9. Write a program that deletes a given element e from the array a.
//     Input: e = 2, a = [4, 6, 2, 8, 2, 2]

var a = [4, 6, 2, 8, 2, 2];
var e = 2;

newArray = [];

for(var i = 0; i < a.length; i++) {
    if(a[i] !== e) {
        newArray[newArray.length] = a[i];
    }
}

console.log(newArray);

// 10. Write a program that inserts a given element e on the given position p in the array a.If
// the value of the position is greater than the array length, print the error message.
//     Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

var newArray = [];

if (p > a.length) {
    console.log("Error message!!");
}
else {

    for (i = 0; i < a.length; i++) {
        if (i === p) {
            newArray[newArray.length] = e;
            newArray[newArray.length] = a[i];
        }
        else {
            newArray[newArray.length] = a[i];
        }
    }
    console.log(newArray);
}
