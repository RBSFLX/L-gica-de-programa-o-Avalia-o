alert('09 Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: ● para homens: (72.7 * h) - 58; ● para mulheres: (62.1 * h) - 44.')

// Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.

let s = prompt('Digite seu sexo [M] para masculino e [F] para feminino: '), h = parseInt(prompt('Digite sua altura: ')), p = 0

if((s === M) || (s === m)){
    p = (72.7 * h) - 58
    alert(p)
}
else if((s === F) || (s === f)){
    p = (62.1 * h) - 44
    alert(p)
}
else{
    alert('Entras invalidas.')
}

