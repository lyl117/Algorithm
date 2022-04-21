var fs = require ('fs');
// 파일을 읽어오기 위해 node.js에서 모듈 fs를 썼다.= 불러옴
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);



