const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo'];

//o primeiro parâmetro é o índice que quero começar a deletar, o segundo parâmetro é até qual índice quero deletar (quantas posições a partir do primeiro parâmetro informado), o terceiro parâmetro é o que quero adicionar a lista (se for necessário)
listaDeChamada.splice(3, 2, 'Rodrigo');

//passando o segundo parâmetro como zero, o splice não apaga nenhum elemento, e sim adiciona o terceiro elemento em qualquer posição (que foi passada no primeiro parâmetro)
listaDeChamada.splice(2, 0, 'Rodrigo');

console.log(`Lista de Chamada: ${listaDeChamada}`);