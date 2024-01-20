function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var resultElement = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Podaj poprawne liczby';
        return;
    }

    var result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;

            if ((number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0)) {
                result = -Math.abs(result);
            }
            break;
        case 'divide':
            if (number2 === 0) {
                resultElement.textContent = 'ERROR';
                return;
            } else {
                result = number1 / number2;
            }
            break;
        default:
            resultElement.textContent = 'CHOOSE OPERATION';
            return;
    }

    result = Math.round(result * 100) / 100;

    resultElement.textContent = result;
}
