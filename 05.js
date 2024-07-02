alert('05 Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado. ')

let n = parseInt(prompt('Digite um número: ')), c

if(n>0){
    c = n*2
    alert(c)
}
else if(n<0){
    c = n*3
    alert(c)
}
else{
    c = 0
    alert(c)
}