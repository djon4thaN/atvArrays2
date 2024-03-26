// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let names = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite um nome:");
    names.push(nome);
}

document.write("Lista de nomes:<br><br>");
for (let i = 0; i < names.length; i++) {
    document.write(names[i], '<br>');
}

document.write("<br><br>Nomes na ordem inversa:<br><br>");
for (let i = names.length - 1; i >= 0; i--) {
    document.write(names[i], '<br>');
};