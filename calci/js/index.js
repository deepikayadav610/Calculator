let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
    expression += number;
}

function appendOperator(operator) {
    if (expression !== '') {
        display.innerText += ` ${operator} `;
        expression += operator;
    }
}

function clearDisplay() {
    display.innerText = '0';
    expression = '';
}

function calculateResult() {
    try {
        display.innerText = eval(expression);
        expression = display.innerText;
    } catch {
        display.innerText = "Error";
        expression = '';
    }
}
