const notas = [10, 7, 8, 5, 10];
notas.pop();
//se não for passado nenhum parâmetro, o javascript interpreta que o último elemento que deve ser retirado do array
console.log(notas);

//quando não se usa let, o javascript interpreta como uma var (mas pode causar bugs em alguns códigos), porém não é uma boa prática
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`);