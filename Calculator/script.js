let firstNumber = "";
let secondNumber = 0;
let operator;
let DIsplay = document.querySelector('#display')
const display = document.createElement('p')
DIsplay.appendChild(display);

let finalResult = document.querySelector('#result');
finalResult.addEventListener('click', () => {result()})

let addition = document.querySelector('#add');
addition.addEventListener('click', () => {addNumbers(); console.log(firstNumber);displayNumber();})

let subtraction = document.querySelector('#sub');
subtraction.addEventListener('click', () => {subNumbers();displayNumber();})

display.textContent = "0";

function operate(n1,n2,operator){
    
}

function getFirstNumber(x){
    firstNumber += x;
}

function clearDisplay(){
    firstNumber="";
}

function delLastNumber(){
    let deleted = firstNumber.split("");
    deleted.pop();
    firstNumber = deleted.join("");
    displayNumber();
}

function addNumbers(){
    secondNumber += +firstNumber;
    firstNumber = "";
}

function subNumbers(){
    if(firstNumber != NaN){
    secondNumber = +firstNumber;

    // console.log(firstNumber)
    console.log(secondNumber)
    firstNumber = "";}
}

function result(){
    firstNumber = +firstNumber + +secondNumber;
    firstNumber =` ${firstNumber}`
    secondNumber=0;
    displayNumber();
}

function displayNumber(){
    display.textContent = firstNumber;
    DIsplay.appendChild(display);
}

const clear= document.querySelector('#clear')
clear.addEventListener('click', () => {clearDisplay(); console.log(firstNumber);displayNumber();})

const del = document.querySelector('#del')
del.addEventListener('click', () => {delLastNumber();console.log(firstNumber);displayNumber();})

const add1 = document.querySelector('#no1');
add1.addEventListener('click', () => {getFirstNumber("1");displayNumber();
console.log(firstNumber);displayNumber();;})

const add2 = document.querySelector('#no2');
add2.addEventListener('click', () => {getFirstNumber("2");
console.log(firstNumber);displayNumber();;})

const add3 = document.querySelector('#no3');
add3.addEventListener('click', () => {getFirstNumber("3");
console.log(firstNumber);displayNumber();;})

const add4 = document.querySelector('#no4');
add4.addEventListener('click', () => {getFirstNumber("4");
console.log(firstNumber);displayNumber();;})

const add5 = document.querySelector('#no5');
add5.addEventListener('click', () => {getFirstNumber("5");
console.log(firstNumber);displayNumber();;})

const add6 = document.querySelector('#no6');
add6.addEventListener('click', () => {getFirstNumber("6");
console.log(firstNumber);displayNumber();;})

const add7 = document.querySelector('#no7');
add7.addEventListener('click', () => {getFirstNumber("7");
console.log(firstNumber);displayNumber();;})

const add8 = document.querySelector('#no8');
add8.addEventListener('click', () => {getFirstNumber("8");
console.log(firstNumber);displayNumber();;})

const add9 = document.querySelector('#no9');
add9.addEventListener('click', () => {getFirstNumber("9");
console.log(firstNumber);displayNumber();;})

function sum(){
    
}
