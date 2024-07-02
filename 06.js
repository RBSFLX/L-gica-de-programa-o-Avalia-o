alert('06 Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado. ')

let a = prompt('Digite o primeiro valor (true ou false): ') === 'true', b= prompt('Digite o segundo valor (true ou false): ') === 'true';

if(a && b) {
    alert('Ambos os valores são verdadeiros.');
}
else if(a || b && !(a && b)) {
    alert('Um dos valores é falsos.')
}
else{
    alert('Ambos os valores são falsos.');
}