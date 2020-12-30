'use strict';

//hoisting : var, function declaration * 변수, 함수 선언등이
//자동적으로 제일 위로 올라가는 것
// var OneSecAfter = function(){
//     console.log('1초 뒤에 출력되는 내용')
// }

// var ThreeSecAfter = function(){
//     console.log('3초 뒤에 출력되는 내용')
// }

function OneSecAfter(){
    console.log('1초 뒤에 출력되는 내용')
}
function ThreeSecAfter(){
    console.log('3초 뒤에 출력되는 내용')
}
function printImmediately(print){
    print();
}
function printDelayed(print,timeout){
    setTimeout(print,timeout);
}
function printInterval(print,timeout){
    setInterval(print,timeout);
}
function FourSecLater(print,timeout){
    console.log('4초 뒤에 출력되는 내용')
}
console.log('1'); //동기
setTimeout(ThreeSecAfter,3000);//비동기
setTimeout(OneSecAfter,1000);//비동기
setTimeout(FourSecLater,4000);//비동기
console.log('3'); //동기
printImmediately(()=>console.log("Print ASAP")); //동기
printDelayed(()=>console.log("Print Last!"),3000);//비동기
//printInterval(()=>console.log("Repeat Message"),1500);


// console.log('1');
// setTimeout(() => console.log('3초 뒤에 출력됩니다'),3000);
/* setTimeout(function(){console.log('3초 뒤에 출력됩니다')},3000); 와 같은 의미 */


// setTimeout(() => console.log('1초 뒤에 출력됩니다'),1000);
// console.log('3');
/* setTimeout(function(){console.log('1초 뒤에 출력됩니다')},1000); 와 같은 의미 */

