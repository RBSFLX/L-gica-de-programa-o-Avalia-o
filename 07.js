alert('07 Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação')

let a = parseInt(prompt('Insira uma variavel: '))

if(a%2 === 0){
    alert(a+5)
}
else{
    alert(a+8)
}