let currentExpression = '';

function appendNumber(num) {
    currentExpression += num;
    document.getElementById('input1').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    document.getElementById('input1').value = currentExpression;
}

function calculateResult() {
    try {
        currentExpression = eval(currentExpression.replace('÷', '/').replace('×', '*'));
        document.getElementById('input1').value = currentExpression;
    } catch (error) {
        document.getElementById('input1').value = 'Error';
    }
}

function clearInput() {
    currentExpression = '';
    document.getElementById('input1').value = '';
}