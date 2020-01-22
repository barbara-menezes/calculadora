
const soma = (a, b, callback) => {return callback(a + b)};
const subtracao = (a, b, callback) => {return callback(a - b)};
const divisao = (a, b, callback) => {return callback(a / b)};
const multiplicacao = (a, b, callback) => {return callback(a * b)};
const potencia = (a, b, callback) => {return callback(Math.pow(a,b))};

const calculadora = (a , b , op , callback) => {

    switch(op){
    case '+':
        soma(a, b, result => {
            return callback(result);
        });
        break;
    case '-':
        subtracao(a, b, result => {
            return callback(result);
        });
        break;
    case '/':
        divisao(a, b, result => {
            return callback(result);
        });
        break;
    case '*':
        multiplicacao(a, b, result => {
            return callback(result);
        });
        break;
    case 'ˆ':
        potencia(a, b, result => {
            return callback(result);
        });
        break;
    }
}

calculadora(2 , 2 , 'ˆ', result => {
    console.log(result);
})
