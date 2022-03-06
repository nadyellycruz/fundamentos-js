const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno))  {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    } else  {
        return nomeDoAluno + ' não está cadastrado';
    }
}

console.log(exibeNomeNota('Ana'));
console.log(exibeNomeNota('Nady'));

//includes "pergunta" para o array se ele inclui determinado elemento e retorna true ou false (booleano)
//indexOf: "indice de" retorna um number (numero do índice)