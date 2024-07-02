alert('08 Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.')

let a = parseInt(prompt('Digite o valor 1: ')), b = parseInt(prompt('Digite o valor 2: ')), c = parseInt(prompt('Digite o valor 3: ')), L = [a, b, c], o = L.sort((a, b) => b - a)

alert(o)