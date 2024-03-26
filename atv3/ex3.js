// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

let value = 10000;

let valuePerfeito = [];

for (let i = 1; i <= value; i++){
    
    let sumDiv = 0;

    for (let k = 1; k < i; k++ ){
        if(i % k === 0){
            sumDiv += k;
        }
    }

    if (sumDiv === i){
        valuePerfeito.push(i)
    }
}

document.write("Números perfeitos até o limite de: ", value, ": ");
document.write(valuePerfeito, ', ');