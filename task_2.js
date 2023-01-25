let value1 = 1;
let value2 = Math.floor(Math.random() * 10);

console.log(value2);
console.log(value1 + value2 / 5 + 17);
/* Приоритет у операторов в JS:
в формуле сначала выполняется деление, а потом сложение;
при определении рандомного числа сначала получается число (Math.random),
потом оно умножается на число max, и в конце команда Math.floor */
