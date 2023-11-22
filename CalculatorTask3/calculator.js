const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let equation = '';
let previousEquation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        switch (buttonValue) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (equation.slice(-1).match(/[+\-*/]/)) {
                    equation = equation.slice(0, -1) + buttonValue;
                } else {
                    equation += buttonValue;
                }
                break;
            case 'C':
                equation = '';
                break;
            case '=':
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                if (equation.includes('-') && equation.charAt(0) !== '-') {
                    equation = '-' + equation;
                }
                try {
                    const result = eval(equation);
                    previousEquation = equation;
                    equation = result.toString();
                } catch (error) {
                    equation = 'Error';
                }
                break;
            default:
                equation += buttonValue;
                break;
        }
        display.value = equation;
    });
});