const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala)     {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)
    return somaDasNotas / notasDaSala.length;
}

console.log(`Média da sala de JavaScript: ${mediaSala(salaJS)}`);
console.log(`Média da sala de Java: ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);


const notas = [10, 6.5, 8, 7];
//nos parâmetros (dentro dos parenteses) o acumulador sempre vem antes do atual; mas na conta (dentro da função) a ordem deles não importa
const media = notas.reduce((acumulador, atual) => acumulador + atual, 0) / notas.length;

console.log(`A Média das notas é: ${media}`);