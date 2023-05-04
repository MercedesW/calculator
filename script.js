const INIT_VALUE = 0;

let listNumbers = [];
let operator = "";

let display = document.getElementById("display");
display.textContent = INIT_VALUE;

let numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
        listNumbers.push(parseFloat(button.textContent));
    })
})

let operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (listNumbers.length > 1) {
            let result = operate(operator, listNumbers[0], listNumbers[1]);
            display.textContent = result
            listNumbers = [result];
        }
        operator = button.textContent;
    })
})

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    operator = "";
    listNumbers = [];
    display.textContent = INIT_VALUE;
})

const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

function operate(operator, a, b) {
    
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b != 0) return divide(a, b);
            else return "Error";
    }
}
