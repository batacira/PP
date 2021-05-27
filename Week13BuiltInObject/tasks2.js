/*1.	Write a JavaScript function that reverses a number. typeof result of the function should be “number”.*/

function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(12345));


/*2.	Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”
*/

function alphabet_order(stringInput) {
    return stringInput.toLowerCase().split('').sort().join('');


}
console.log(alphabet_order("Darko Borislav Filip"));



function ourSplit(singleString) {
    return singleString.split();
}
console.log(ourSplit("web"));

function ourSplit(singleString) {
    return singleString.split('').sort().join('');
}
console.log(ourSplit("dcba"));

// .split svako slovo odvaja u poseban string u novom arrayu. kada je samo split() onda jedan elemenat niza,
//a kada ima split('')odvoji svako slovo stringa u poseban element niza, a kada je razmak '  ' onda ide rec 

// sort() sortia po abecedi ili brojevima od 0,1,2

// join() odvaja pojedinacna slova sa zrezom i join('') pretvara u jedna string




    /*3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

napravimo 3 stinga:  var zemlja = ["Republic",  "Of",  "Serbia"];

zemlja

*/

function a(stringInput) {

    return stringInput.split(' ');
    //.join().trim();     
    //   .sort().join()
}

function oneWord(a) {

    for (var i = 0; i < a.length; i++) {


        a[i] = a.sort();
    }
    b = a;
    return b;
}

// console.log(a('Republic Of Serbia'));
console.log(oneWord(b));




/*4.	Write a function to split a string and convert it into an array of words.

"John Snow" -> [ 'John', 'Snow' ]
*/

var string_to_array = function (stringInput) {
    return stringInput.split(' ');
};
console.log(string_to_array("John Snow"));

5. /*5.	Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S."
*/


var abbrev_name = function (str1) {
    var split_names = str1.split(" "); // ["John", "Snow"]
    //if (split_names.length > 1) {
    return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    // }
    // return split_names[0];
};

console.log(abbrev_name("John Snow"));





/*7.	Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"
*/



// myWord = london  --> London
// prebacimo rec u string, odsecemo slovo na 0 indexu, povecamo, pa p0tom spojimo 

var firstLetterCapitalized = function (myWord) {
    var firstLetter = myWord[0].toUpperCase();
    var allText = firstLetter + myWord.substr(1)



    return allText;
};

console.log(firstLetterCapitalized("pariz"));




// 8. Write a function to hide email addresses to protect them from unauthorized users.
//  somerandomaddress@example.com  -> somerand...@example.com;

var protect_email = function (user_email) {
    var avg, splittEmail, part1, part2;

    splittEmail = user_email.split("@");   // podelio je na dva stringa [ 'bit-student', 'google.rs' ]

    part1 = splittEmail[0];  // ovo je 'bit-student'

    avg = part1.length / 2;   // 11/2= 5,5 

    part1 = part1.substring(0, (part1.length - avg)); // 0 do (11- 5,5)  --> (0,5)  "bit-s"
    part2 = splittEmail[1];  // cela rec 'google.rs' 

    return part1 + "...@" + part2;  //"bit-s" + "...@" + 'google.rs'

};

console.log(protect_email("bit_student@google.rs"));




/*9.	Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/





var upperLowerTotal = function (myString) {

    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';

    var result = [];  // prazan niz

    for (var i = 0; i < myString.length; i++) {
        if (UPPER.indexOf(myString[i]) !== -1)  //pretrazuje string sa zadatim slovom, ako je veliko slovo- prolazi
        {
            result.push(myString[i].toLowerCase()); // u prazan niz se ubacuje push metodom pretvoreno veliko slovo u malo  
        }
        else if (LOWER.indexOf(myString[i]) !== -1) {
            result.push(myString[i].toUpperCase());
        }
        else {
            result.push(myString[i]); // razmaci, brojevi i svi simboli koji nisu slova se samo prepisuju
        }
        }
    }
    



