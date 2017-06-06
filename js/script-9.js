var d = document;

function makeCounter() {
    var currentCounter = 1;
    return function () {
        return currentCounter++;
    }
}
var counter = makeCounter();
var changeBtn = d.querySelector('.change');


d.querySelector('.change').addEventListener('click', function () {
    if (d.querySelector('.change').value == "Кнопка") {
        d.querySelector('.change').value = "Кликов: " + counter();
    } else {
        d.querySelector('.change').value = "Кликов: " + counter();
    }
});




// var btns = d.querySelectorAll("button");
//
//
// var last = d.getElementsByClassName('last');
// last.addEventListener('click', function () {});
// last.onclick = function () {
//     scrollTo(0, 0)
// };