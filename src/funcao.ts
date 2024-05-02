// função de multiplicação
function multiplicacao(num1: number, num2: number): number{
    return num1 * num2;
}

const soma = multiplicacao(4, 10);
console.log(`A soma entre os dois numeros é: ${soma}`);

// função de saudação
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const nomeUsuario = "Maria";
const mensagemSaudacao = saudacao(nomeUsuario);
console.log(mensagemSaudacao); // Saída: "Olá Maria"
