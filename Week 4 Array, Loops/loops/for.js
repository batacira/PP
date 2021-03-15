// var punishment = "";

// for(var i = 0; i < 100; i++) {
//     punishment += "I will never do this again\n";
// }
// console.log(punishment);

// var sum = 0;

// for(var i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

var sum = 0;

for (var i = 1; i <= 100; i++) {
    if(sum === 0){
        console.log("Current sum is: " + sum)
    }
    sum += i;

    if(sum > 30){
        break;
    }
    console.log("Adding " + i + ". Current sum is: " +sum);
}

