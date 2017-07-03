var d = document;
var apple = d.querySelector('#apple');
var samsung = d.querySelector('#samsung');
var mi = d.querySelector('#mi');
var meizu = d.querySelector('#meizu');

apple.value = localStorage.getItem('apple');
samsung.value = localStorage.getItem('samsung');
mi.value = localStorage.getItem('mi');
meizu.value = localStorage.getItem('meizu');


var btn = d.querySelector('.btn');

btn.addEventListener('click', function () {
    //берем значения с селектов
    var appleVal = apple.value;
    var samsungVal = samsung.value;
    var miVal = mi.value;
    var meizuVal = meizu.value;
    // закидываем их в хранилище
    localStorage.setItem('apple', appleVal);
    localStorage.setItem('samsung', samsungVal);
    localStorage.setItem('mi', miVal);
    localStorage.setItem('meizu', meizuVal);
    //'елементы сохранены'
    console.log('Items already saved');
});

// Promise




function delay(ms){
    // создаем промис
    var result = new Promise(function (resolve, reject) {
        // отсрочка
        setTimeout(function noName(){
            // если число
            if(typeof(ms) === "number") {
                resolve('Succesfully complete')
            } else if(ms === '') { // если пустое место
                reject('Please specify duration');
            } else if(typeof(ms) !== "number") { // если не число
                reject("Duration is required to be a number")
            }
        }, ms)
    });
    return result;
}
function doStuff() {
    console.log("Я появлюсь через 2 секунды(уже)");
}
delay(2000).then(doStuff);

// WIKI SEARCH

var search = document.querySelector('.search');

search.addEventListener('keyup', function gettingResults() {
    var result = new Promise (function (resolve, reject) {
        var wts = d.querySelector('.search').value;
        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        var http = new XMLHttpRequest();
        http.open('POST', 'https://en.wikipedia.org/w/api.php');
        http.addEventListener('readystatechange', handleResponse);
        params['search'] = document.querySelector('.search').value;
        var body = Object.keys(params)
            .map(function (prop) {
                return prop + '=' + params[prop]
            })
            .join('&');
        if (wts !== '')
            http.send(body);
        if(this.readyState == 4) {
            if(this.status == 200) {
                resolve("Status 200!")
            }
            else {
                reject("Status isn't 200")
            }
        } else {
            reject("Status isn't yet 200")
        }
    })
});

gettingResults.then(function () {
    var result = JSON.parse(this.responseText);
    var ul = d.querySelector('.ulList');
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }
    for (var i = 0; i < result[1].length; i++) {
        var li = d.createElement('li');
        var a = d.createElement('a');
        a.className = 'autocomplete';
        a.href = result[3][i];
        a.target = '_blank';
        document.getElementsByTagName('ul')[0].appendChild(li);
        document.getElementsByTagName('li')[i].appendChild(a);
    }
}).catch(function () {
    "Status isn't 200/Status isn't yet 200"
});


// function handleResponse() {
//     var result = new Promise(function (resolve, reject) {
//         if(this.readyState == 4) {
//             if(this.status == 200) {
//                 resolve("Status 200!")
//                 // var result = JSON.parse(this.responseText);
//                 // var ul = d.querySelector('.ulList');
//                 // while (ul.firstChild) {
//                 //     ul.removeChild(ul.lastChild);
//                 // }
//                 // for (var i = 0; i < result[1].length; i++){
//                 //     var li = d.createElement('li');
//                 //     var a = d.createElement('a');
//                 //     a.className = 'autocomplete';
//                 //     a.href = result[3][i];
//                 //     a.target = '_blank';
//                 //     document.getElementsByTagName('ul')[0].appendChild(li);
//                 //     document.getElementsByTagName('li')[i].appendChild(a);
//                 }
//             else {
//                 reject("Status isn't 200")
//             }
//             } else {
//                 reject("Status isn't yet 200")
//         }
//     })
// }