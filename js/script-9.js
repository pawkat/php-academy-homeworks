var d = document;

function makeCounter() {
    var currentCounter = 1;
    return function () {
        return currentCounter++;
    }
}
var counter = makeCounter();

var countClick = d.querySelector('.change');
var toTop = d.querySelector('.last');


countClick.addEventListener('click', function () {
    if (countClick.value == "Кнопка") {
        countClick.value = "Кликов: " + counter();
        return console.log(countClick.value);
    } else {
        countClick.value = "Кликов: " + counter();
        return console.log(countClick.value);
    }
});

toTop.addEventListener('click', function () {
    setInterval (function () {
        scrollBy(0, -10)
    }, 10)
});

 var btns = d.querySelectorAll("button");
console.log(btns);
var headers = d.querySelectorAll("h2");
console.log(headers);

btns[0].addEventListener('click', function () {
    var to = headers[1].getBoundingClientRect().top;
    scrollBy(0, to)
});

btns[1].addEventListener('click', function () {
    var to = headers[2].getBoundingClientRect().top;
    scrollBy(0, to)
});

btns[2].addEventListener('click', function () {
    var to = headers[3].getBoundingClientRect().top;
    scrollBy(0, to)
});

btns[3].addEventListener('click', function () {
    var to = headers[4].getBoundingClientRect().top;
    scrollBy(0, to)
});

btns[4].addEventListener('click', function () {
    var to = headers[5].getBoundingClientRect().top;
    scrollBy(0, to)
});

btns[5].addEventListener('click', function () {
    var to = headers[6].getBoundingClientRect().top;
    scrollBy(0, to)
});
btns[6].addEventListener('click', function () {
    var to = headers[7].getBoundingClientRect().top;
    scrollBy(0, to)
});
btns[7].addEventListener('click', function () {
    var to = headers[8].getBoundingClientRect().top;
    scrollBy(0, to)
});
btns[8].addEventListener('click', function () {
    var to = headers[9].getBoundingClientRect().top;
    scrollBy(0, to)
});
btns[9].addEventListener('click', function () {
    var to = headers[10].getBoundingClientRect().top;
    scrollBy(0, to)
});
// toTop.addEventListener('click', function () {
//     scrollTo(0, 0)
// });