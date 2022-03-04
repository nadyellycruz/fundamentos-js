//tipo de dado
//booleanos

//conversão implícita
/*const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
//== são equivalentes (mesmo conteúdo
//=== são diferentes pois o tipo também é comparado, e um é numero, enquanto o outro é string)

console.log(numero + numeroString);*/

//conversão explícita
const numero = 456;
const numeroString = "456"; //se for usado algum algarismo (diferente de numero), retornará NaN

console.log(numero + numeroString);

//Number()
//String()
console.log(numero + Number(numeroString));