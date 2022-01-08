function add(num1, num2) {
    return num1 + num2;
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
        return add(num1, num2);
    } else if (operation === 'subtract') {
        return subtract(num1, num2);
    } else if (operation === 'multiply') {
        return multiply(num1, num2);
    } else if (operation === 'divide') {
        return divide(num1, num2);
    }
};

// Populate display
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const clickedButton = button.id;
            populateDisplay(clickedButton);
        });
    });

function populateDisplay(clickedButton) {
    if (clickedButton === 'one') {
        display.textContent = 1;
    } else if (clickedButton === 'two') {
        display.textContent = 2;
    } else if (clickedButton === 'three') {
        display.textContent = 3;
    } else if (clickedButton === 'four') {
        display.textContent = 4;
    } else if (clickedButton === 'five') {
        display.textContent = 5;
    } else if (clickedButton === 'six') {
        display.textContent = 6;
    } else if (clickedButton === 'seven') {
        display.textContent = 7;
    } else if (clickedButton === 'eight') {
        display.textContent = 8;
    } else if (clickedButton === 'nine') {
        display.textContent = 9;
    } else if (clickedButton === 'zero') {
        display.textContent = 0;
    } 
};