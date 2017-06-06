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
var isSimple;
for (var currentNumber = from; currentNumber <= to; currentNumber++) {
    var isSimple = true;
    for (var j = 2; j < currentNumber; j++) {
        if (currentNumber % j == 0) {
            isSimple = false;
        }
    }
    if (isSimple) {
        console.log(currentNumber)
    }
}
console.log("---- Task 4 ----");
function test(number) {
        var isSimple = true;
        for (var j = 2; j < currentNumber; j++) {
            if (currentNumber % j == 0) {
                isSimple = false;
                console.log(isSimple)
            }
        }
        if (isSimple) {
            console.log(isSimple);
        }
};
test(5);
// ...
