// Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numPedido = parseFloat(prompt("Digite um numero para ver se está ou não na lista: "))

let estaNaLista = false

for(let i = 0; i < num.length; i++){
    if(num[i] === numPedido){
        estaNaLista = true
        break;
    }
}
if(estaNaLista == true){
    document.write("Seu numero está na lista!")
}
else{
    document.write("Seu numero não está na lista!")
}