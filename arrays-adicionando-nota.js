const notas = [10, 6, 8];

notas.push(7);
//quando é passado um parâmetro vazio (nenhum valor), o resultado será NaN

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);