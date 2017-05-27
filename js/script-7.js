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
console.log("---- Task 3 ----");
var nums = [6, 4, 9, 3, 5, 2];
var nums2 = [6, 4, 9, 3, 5, 2];
nums2.sort();
console.log(nums);
console.log(nums2);
