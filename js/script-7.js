console.log("---- Task 1 ----");
function admin () {
    if (this.age >= 18) {
        this.isAdmin = true;
    } else  if(this.age < 18) {
        this.isAdmin = false;
    }
}
var user = {
    age: 17,
    grant: admin
};
console.log(user);
user.grant();
console.log(user);
console.log("---- Task 2 ----");
var str = "Some time ago I was here";
// Yesterday I was here and there
var result = str
    .replace ("Some time ago", "Yesterday")  //Yesterday ago I was here
    .concat (" and there");
console.log(result);
var str1 = [10, 20, 30, 40];
var result1 = str1
    .join(";")
console.log(result1);
// "10, 20, 30, 40" --> "10; 20; 30; 40"
console.log("---- Task 3 ----");
var nums = [6, 4, 9, 3, 5, 2];
var nums2 = nums.slice(0);
nums2.sort(function (a, b) {
    return a - b;
});
console.log(nums);
console.log(nums2);
console.log("---- Task 4(camleCase) ----");
function toCamelCase(str) {
    var words = str.split('-');
    console.log(words)

    words = words.map(function (w, i) {
        if(i > 0) {
            return w[0].toUpperCase() + w.substr(1)
        } else {
            return w;
        }
    });
    return words.join('')
}

console.log(toCamelCase("background-color"));
console.log(toCamelCase("-webkit-transform"));