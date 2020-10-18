var a1 = 20;
var a2 = 10;

function sum(num1, num2){
    return num1 + num2;
} 

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1*num2;
}

function div(num1, num2){
    return num1/num2;
}

var sumArrow = (num1,num2) => num1 + num2;
var subArrow = (num1,num2) => num1 - num2;
var mulArrow = (num1,num2) => num1 * num2;
var divArrow = (num1,num2) => num1 / num2;

console.log(sum(a1,a2));
console.log(sub(a1,a2));
console.log(mul(a1,a2));
console.log(div(a1,a2));

console.log(sumArrow(a1,a2));
console.log(subArrow(a1,a2));
console.log(mulArrow(a1,a2));
console.log(divArrow(a1,a2));