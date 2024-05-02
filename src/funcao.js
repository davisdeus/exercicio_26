"use strict";
// função de multiplicação
function multiplicacao(num1, num2) {
    return num1 * num2;
}
const soma = multiplicacao(5, 10);
console.log(`A soma entre os dois numeros é: ${soma}`);
// função de saudação
function saudacao(nome) {
    return `Olá ${nome}`;
}
const nomeUsuario = "Davi";
const mensagemSaudacao = saudacao(nomeUsuario);
console.log(mensagemSaudacao); // Saída: "Olá Davi"
