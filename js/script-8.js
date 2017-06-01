console.log("_______TASK 1_______");

// ADD
function addClass(el, addedText){
    if (el.indexOf(addedText) > -1) {
        return str;
    } else if (el.indexOf(addedText) == -1) {
        return el + ' ' + addedText;
    }
}


// REMOVE

function removeClass(el, removedText) {
    return el.replace(removedText + " ", '');
}

//TOGGLE

function toggleClass(el, toggledText) {
    if (el.indexOf(toggledText) > -1) {
        return el
            .replace(toggledText, '');
    } else if (el.indexOf(toggledText) == -1) {
        return el
            .concat(" " + toggledText );
    }
}

var str = "menu top green";
console.log(str);

str = addClass(str, 'new');
str = addClass(str, 'top');
str = addClass(str, 'me');
console.log(str);

str = removeClass(str, 'new');
console.log(str);

str = toggleClass(str, 'green ');
str = toggleClass(str, 'red');
console.log(str);

console.log("_______TASK 2_______");

function toCamelCase(el){
    var index = el.indexOf('-');
    var index2 = index + 1;
    el[index2].toUpperCase();
}
console.log(toCamelCase("background-color")); // 'backgroundColor';
console.log(toCamelCase("list-style-image")); // 'listStyleImage';
console.log(toCamelCase("-webkit-transition")); // 'WebkitTransition';


console.log("_______TASK 3_______");

var names, total, sorted;
var users = [
    { name: "Alex", cash: 43 },
    { name: "John", cash: 274 },
    { name: "Carl", cash: 82 },
    { name: "Bill", cash: 14 }
];
names = [users[0].name, users[1].name, users[2].name, users[3].name];
total = users[0].cash + users[1].cash + users[2].cash + users[3].cash;
sorted = users.sort(function (a, b) {
    return a.cash - b.cash;
});
users = JSON.stringify(users);

console.log(names); // ["Alex", "John", "Carl", "Bill"]
console.log(total); // 413
console.log(sorted); // [{name:"Bill",cash:14},{name:"Alex",cash:43},{name:"Carl",cash:82},{name:"John",cash:274}]
console.log(users); // [{name:"Alex",cash:43},{name:"John",cash:274},{name:"Carl",cash:82},{name:"Bill",cash:14}]

console.log("_______TASK 4_______");
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(2, 10));


