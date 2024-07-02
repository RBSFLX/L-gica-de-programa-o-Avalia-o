// ) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
// aproveitamento, usando a fórmula: 
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
// suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
// Média de aproveitamento Conceito 
// >= 90 A 
// >= 75 e < 90 B 
// >= 60 e < 75 C 
// >= 40 e < 60 D 
// < 40 E

let id = parseInt(prompt('Número de identificação: ')), n1 = parseInt(prompt('Nota 1: ')), n2 = parseInt(prompt('Nota 2: ')), n3 = parseInt(prompt('Nota 3: ')), me = parseInt(prompt('Média de exercícios: ')), ma

ma = (n1 + n2 * 2 + n3 * 3 + me)/7

if(ma < 40){
    alert('Conceito E')
}
else if(ma >= 40 || ma < 60){
    alert('Conceito D')
}
else if(ma >= 60 || ma < 75){
    alert('Conceito C')
}
else if(ma >= 75 || ma < 90){
    alert('Conceito B')
}
else{
    alert('Conceito A')
}

alert(id + ': ' + ma)