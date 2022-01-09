function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operation, num1, num2) {
    if (operation === 'add') {
        return display.textContent = add(num1, num2);
    } else if (operation === 'subtract') {
        return display.textContent = subtract(num1, num2);
    } else if (operation === 'multiply') {
        return display.textContent = multiply(num1, num2);
    } else if (operation === 'divide') {
        return display.textContent = divide(num1, num2);
    }
};

// Populate display
const displayValue = [];

let operation = '';
let num1 = 0;
let num2 = 0;


const display = document.querySelector('#display');

const numButtons = document.querySelectorAll('.number');
    numButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const clickedButton = button.id;
            populateDisplay(clickedButton);
        });
    });

function populateDisplay(clickedButton) {
    if (clickedButton === 'one') {
        displayValue.push(1);
    } else if (clickedButton === 'two') {
        displayValue.push(2);
    } else if (clickedButton === 'three') {
        displayValue.push(3);
    } else if (clickedButton === 'four') {
        displayValue.push(4);
    } else if (clickedButton === 'five') {
        displayValue.push(5);
    } else if (clickedButton === 'six') {
        displayValue.push(6);
    } else if (clickedButton === 'seven') {
        displayValue.push(7);
    } else if (clickedButton === 'eight') {
        displayValue.push(8);
    } else if (clickedButton === 'nine') {
        displayValue.push(9);
    } else if (clickedButton === 'zero') {
        displayValue.push(0);
    } 
    return display.textContent = parseInt(displayValue.join(''));
};

const adds = document.querySelector('#add');
    adds.addEventListener('click', () => {
        num1 = parseInt(display.textContent);
        displayValue.length = 0
        operation = adds.id;
    });

const subtracts = document.querySelector('#subtract');
    subtracts.addEventListener('click', () => {
        num1 = parseInt(display.textContent);
        displayValue.length = 0
        operation = subtracts.id;
    });

const multiplies = document.querySelector('#multiply');
    multiplies.addEventListener('click', () => {
        num1 = parseInt(display.textContent);
        displayValue.length = 0
        operation = multiplies.id;
    });

const divides = document.querySelector('#divide');
    divides.addEventListener('click', () => {
        num1 = parseInt(display.textContent);
        displayValue.length = 0
        operation = divides.id;
    });

const equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        num2 = parseInt(display.textContent);
        operate(operation, num1, num2);
    });

const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', () => {
        displayValue.length = 0;
        display.textContent = 0;
    });