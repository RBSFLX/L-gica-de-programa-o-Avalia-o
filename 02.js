alert('02 Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).')

let nome = prompt('Digite seu nome: '), sexo = prompt('Indique seu sexo com [M] para masculino e [F] para feminino: '), estadoCivil = prompt('Indique seu estado civil com [S] para solteiro(a) e [C] para casado(a): '), tc = 0

if((sexo === 'F' || sexo === 'f') && (estadoCivil === 'C' || estadoCivil === 'c')){
    tc = parseInt(prompt('Digite o seu tempo de casada: '))
}