var d = document;

function makeCounter() {
    var currentCounter = 1;
    return function () {
        return currentCounter++;
    }
}
var counter = makeCounter();

var countClick = d.querySelector('.change');

countClick.addEventListener('click', function () {
    if (countClick.value == "Кнопка") {
        countClick.value = "Кликов: " + counter();
        return console.log(countClick.value);
    } else {
        countClick.value = "Кликов: " + counter();
        return console.log(countClick.value);
    }
});


 var btns = d.querySelectorAll("button");
console.log(btns);


function scrollClickButton (buttonClassName){
    var el = d.querySelector("." + buttonClassName);
    el.onclick = function() {
        var positionButton  = el.nextElementSibling.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var animateScroll = setInterval(function(){
            var positionButton  = el.nextElementSibling.getBoundingClientRect().top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var intervalScroll = (positionButton + 40)/20;
            var scrollToY = scrollTop + intervalScroll;
            if ( positionButton  <= 0){
                clearInterval(animateScroll);
            }
            else if(positionButton >= 1){
                setTimeout(function() {
                    window.scrollTo(0,scrollToY);
                }, 2)

            }
        }, 10);
        return animateScroll;
    };
}

scrollClickButton(btns[0].className);
scrollClickButton(btns[1].className);
scrollClickButton(btns[2].className);
scrollClickButton(btns[3].className);
scrollClickButton(btns[4].className);
scrollClickButton(btns[5].className);
scrollClickButton(btns[6].className);
scrollClickButton(btns[7].className);
scrollClickButton(btns[8].className);
//

var toTop = d.querySelector('.last');
//
function scrollToTop (buttonClassName){
    var el = d.querySelector("." + buttonClassName);
    el.onclick = function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var intevalScroll = 20;
        var scrollToY = scrollTop - intevalScroll;
        var animateScroll = setInterval(function(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var intevalScroll = 20;
            var scrollToY = scrollTop - intevalScroll;
            if ( scrollTop  <= 0){
                clearInterval(animateScroll);
            }
            else if(scrollTop >= 1){
                setTimeout(function() {
                    window.scrollTo(0,scrollToY);
                }, 1)

            }
        }, 15);
        return animateScroll;
    };
}


scrollToTop("last");