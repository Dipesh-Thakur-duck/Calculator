function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1  - num2;
}
function divide(num1,num2){
    return num1 /num2;
}
function multiply(num1,num2){
    return num1 * num2;
}

function operate(operation,num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operation){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
    }
}

let firstNumber = '';
let lastNumber = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let value = button.innerText;
        let buttonType = button.dataset.type;

        if(buttonType === 'digit'){
            if(display.textContent === '0' || shouldResetScreen){
               display.textContent = value; // to remove the number from the screen
               shouldResetScreen = false; 
            }else{
                display.textContent += value;
            }
        }
        if(buttonType === 'operator'){
            firstNumber = display.textContent;
            currentOperator = value;
            shouldResetScreen = true;
        }
        if(button.id === 'equals'){
            if(currentOperator === null || shouldResetScreen) return;
            secondNumber = display.innerText;
            const result = operate(currentOperator, firstNumber, secondNumber);
            display.innerText = result;
            firstNumber = result;
            currentOperator = null;
        }
        if(button.id === 'clear' ){
            display.textContent = '0';
            firstNumber = '';
            secondNumber = '';
            currentOperator = null;
        }


    })
})