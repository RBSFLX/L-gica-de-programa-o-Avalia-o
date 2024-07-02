// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
// Código Condição de pagamento 
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2 À vista no cartão de crédito, recebe 15% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 

let p = prompt('Valor do produto: '), m = prompt('// 1 À vista em dinheiro ou cheque, recebe 10% de desconto  2 À vista no cartão de crédito, recebe 15% de desconto  3 Em duas vezes, preço normal de etiqueta sem juros  4 Em duas vezes, preço normal de etiqueta mais juros de 10% ') 
let f

if(m === 1){
    f = p - ((p/100)*10)
    alert(f)
}
else if(m === 2){
    f = p - ((p/100)*15)
    alert(f)
}
else if(m === 3){
    f = p
    alert(f)
}
else if(m === 4){
    f = p + ((p/100)*10)
    alert(f)
}
else{
    alert('Opção inválida')
}