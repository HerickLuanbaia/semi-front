function calc() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let operador = document.getElementById('op').value;
    let res;

    switch (operador) {

        case '+':
            res = n1 + n2;
            break;

        case '-':
            res = n1 - n2;
            break;

        case '*':
            res = n1 * n2;
            break;

        case '/':
            if (n2 !== 0) {
                res = (n1 / n2).toFixed(2);
            } else {
                res = "Não se divide por 0";
            }
            break;

        default:
            res = "Operador inválido";
    }

    document.getElementById('res').textContent = res;
}