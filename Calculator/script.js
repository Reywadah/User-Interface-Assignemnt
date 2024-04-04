let firstNumber='';
let secondNumber='';
let thirdNumber='';
let operator;

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {dotNotation();})
dot.addEventListener('keydown', (e) => {
    let doot = e.key; if(doot == '.'){dotNotation()};})

const clear= document.querySelector('#clear')
clear.addEventListener('click', () => {clearDisplay(); console.log(firstNumber);displayNumber();})

const del = document.querySelector('#del')
del.addEventListener('click', () => {delLastNumber();console.log(firstNumber);displayNumber();})

const add0 = document.querySelector('#no0');
add0.addEventListener('click', () => {getFirstNumber("0");
console.log(firstNumber);displayNumber();;})

const add1 = document.querySelector('#no1');
add1.addEventListener('click', () => {getFirstNumber("1");
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

let DIsplay = document.querySelector('#display')
const display2 = document.createElement('p')
DIsplay.appendChild(display2);
const display = document.createElement('p')
DIsplay.appendChild(display);


let finalResult = document.querySelector('#result');
finalResult.addEventListener('click', () => {console.log(firstNumber);console.log(operator);console.log(secondNumber);operate(firstNumber,secondNumber,operator);})

let addition = document.querySelector('#add');
addition.addEventListener('click', () => {operator = '+';
console.log(operator);joinNumbers();})

let subtraction = document.querySelector('#sub');
subtraction.addEventListener('click', () => {operator = '-';
console.log(operator);joinNumbers();})

let multiplication = document.querySelector('#mult');
multiplication.addEventListener('click', () => {operator = 'x';
console.log(operator);joinNumbers();})

let division = document.querySelector('#div');
division.addEventListener('click', () => {operator = '÷';
console.log(operator);joinNumbers();})

display.textContent = "0";

function sum(a,b){
    let fix = +b + +a;
    return fix.toFixed(2);
}

function sub(a,b){
    if(a < 0){a = -a;}
    let fix= b - a;
    return fix.toFixed(2);
}

function mult(a,b){
    let fix = b*a;
    return fix.toFixed(2);
}

function div(a,b){
    let fix = b/a;
    return fix.toFixed(2);
}

function operate(a,b,$){
    display2.textContent='';
    switch ($) {
        case '+':
        display2.textContent += `${secondNumber} ${$} ${firstNumber}`;  
        firstNumber = sum(a,b);
        display.textContent= firstNumber;
        
            break;
        case '-':
        display2.textContent += `${secondNumber} ${$} ${firstNumber}`;  
        firstNumber = sub(a,b);
        display.textContent= firstNumber;
            break;
        case 'x':
        display2.textContent += `${secondNumber} ${$} ${firstNumber}`;  
        firstNumber = mult(a,b);
        display.textContent= firstNumber;
            break;
        case '÷':
        display2.textContent += `${secondNumber} ${$} ${firstNumber}`;  
        firstNumber = div(a,b);
        display.textContent= firstNumber;
            break;
    
        default:
            break;
    }
}
function joinNumbers(){
    secondNumber = firstNumber;
    firstNumber = "";
    display2.textContent = `${secondNumber} ${operator}`;
    DIsplay.appendChild(display2);
    display.textContent='';
    DIsplay.append(display);
}

function displayNumber(){
    display.textContent = firstNumber;
    DIsplay.appendChild(display);
}

function getFirstNumber(x){
    firstNumber += x;
}

function clearDisplay(){
    firstNumber="";
    secondNumber='';
    operator='';
    display2.textContent = ``;
    DIsplay.appendChild(display2);
}

function delLastNumber(){
    let deleted = firstNumber.split("");
    deleted.pop();
    firstNumber = deleted.join("");
    displayNumber();
}

function dotNotation(){
    let deleted = firstNumber.split("");
    if(deleted.includes('.',0)){return}
    deleted.push('.');
    firstNumber = deleted.join("");
    displayNumber();
}
