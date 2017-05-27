console.log("---- Task 1 ----");
var number = 13;
if (number > 0) {
    console.log(1)
} else if (number < 0) {
    console.log(-1)
} else if (number == 0) {
    console.log(0)
}
console.log("---- Task 2 ----");
for (var i = 2; i <=10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
console.log("---- Task 3 ----");
var from = 2;
var to = 10;
nextPrime:
for (var a = from; a <= to; a++) {
    for (var j = 2; j < a; j++) {
        if (a % j == 0) {
            continue nextPrime;
        }
    }
    console.log(a)
}
// console.log("---- Task 4 ----");
// var fromNumber = 5;
// var toNumber = fromNumber;
// nextPrime2:
//     for (var d = fromNumber; d <= toNumber; ) {
//         for (var q = 2; q < d; q++) {
//             if (d % q == 0) {
//
//             }
//             console.log(true);
//         }
//         console.log(false)
//     }