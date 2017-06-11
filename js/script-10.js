var d = document;
var educationInp = d.querySelector("#education");
var inst1 = d.querySelectorAll(".inst1");
var add = d.querySelector(".add");
var inst2 = d.querySelectorAll(".inst2");
var addMore = d.querySelector(".addBtn");

educationInp.addEventListener('click', function () {
    if (education.checked == true) {
        inst1.forEach(function (el) {
            el.classList.add("display");
        });
        add.classList.add("display");

    } else if(education.checked == false) {
        inst1.forEach(function (el) {
            el.classList.remove("display")
        });
        add.classList.remove("display");
        inst2.forEach(function (el) {
            el.classList.remove("display");
        })
    }
});
addMore.addEventListener('click', function () {
    inst2.forEach(function (el) {
        el.classList.add("display");
    });
    add.classList.remove("display")
});


var callBack = d.querySelector(".cB");
var subMenu = d.querySelector(".submenu");
var yes = d.querySelector(".yes");

callBack.addEventListener('click', function () {
    d.querySelector(".submenu").classList.add("displayBlock");
    console.log("display: block");
});
yes.addEventListener('click', function () {
    console.log((d.querySelector(".number").value))
});

// Как проверить что кликнул не не на блок, а в любое другое место (что то вроде if(click !== e.target) - проверить что кликнул не на (e.target);
d.addEventListener('click', function () {
    // d.querySelector(".submenu").classList.remove("displayBlock");
    // console.log("display: none");
});