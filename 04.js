alert('04 Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.')

let a = parseInt(prompt('Digite o valor de "A": ')), b = parseInt(prompt('Digite o valor de "B": ')), c

if(a === b){
    c = a+b
}
else{
    c = a*b
}

alert('C = ' + c)