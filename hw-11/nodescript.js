var fs = require('fs');

var file = fs.readFileSync("./names.txt", "utf8");
var arr = file.split(' ');

var gulp = require('gulp');

var file1, file2, file3, file4;

function allCss() {
    file1 = fs.readFileSync("./css/style2.css", "utf8");
    file2 = fs.readFileSync("./css/style3.css", "utf8");
    file3 = fs.readFileSync("./css/style4.css", "utf8");
    file4 = fs.readFileSync("./css/style10.css", "utf8");
    var allCss = file1+file2+file3+file4;
    fs.writeFile("./css/allCss.css", allCss);
}
// file1 = fs.readFileSync("./css/style2.css", "utf8");
// file2 = fs.readFileSync("./css/style3.css", "utf8");
// file3 = fs.readFileSync("./css/style4.css", "utf8");
// file4 = fs.readFileSync("./css/style10.css", "utf8");

// var allCss = file1+file2+file3+file4;

// fs.writeFile("./css/allCss.css", allCss);
allCss();