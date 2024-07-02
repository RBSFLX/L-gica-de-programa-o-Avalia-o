alert('01 Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.')

let a = parseInt(prompt('Valor A')), b = parseInt(prompt('Valor B')), c = parseInt(prompt('Valor C'))

if (c >= a+b) {
    alert('A soma A+B não é maior que C.')    
}
else{
    alert('A soma A+B é maior que C.')
}