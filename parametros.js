//parâmetros de função
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(5, 2));
console.log(soma(67, 80));
console.log(soma(124, 385));

//parâmetros x argumentos
//a ordem dos parâmetros é importante

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Nady", 35));

function multiplica(numero1, numero2)   {
    return numero1 * numero2;
}

                             //5         //7
console.log(multiplica(soma(2, 3), soma(4, 3)));

//passando apenas um parâmetro (NaN)
function multiplica(numero1 = 1, numero2 = 1)   {
    return numero1 * numero2
}

console.log(multiplica(9));

//nome da função é exclusivo dela, mas os nomes de parâmetros podem ser repetidos de uma função para outra, pois só são válidos dentro do escopo da função, ou seja, enquanto a função estiver em execução
//uma boa prática é passar poucos argumentos para a função (uma função com muitos argumentos deve ser quebrada em funções menores)
 