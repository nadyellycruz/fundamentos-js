const nomes = ['Nady', 'Any', 'Rita', 'Adair', 'Eric', 'Rosemeire', 'Eder', 'Luiz'];
const notas = [10, 10, 9, 8, 4.5, 3, 3.7, 6.5];

const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5);
console.log(`Reprovados: ${reprovados}`);

//filter sempre retorna um booleado (verdadeiro ou falso)