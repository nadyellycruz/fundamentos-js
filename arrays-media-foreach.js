const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//callback (uma função que chama de volta outra função)
notas.forEach(nota =>  {
    somaDasNotas += nota;
});

/*pode ser feito como uma função "normal" também
notas.forEach(function (nota)   {
                   //nota[i]
    somaDasNotas += nota;
})*/

let media = somaDasNotas / notas.length;

console.log(media);