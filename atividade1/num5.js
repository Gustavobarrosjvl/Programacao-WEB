function num5(){
let termos = Number(prompt("Digite a quantidade de termos"));

let numero = "";
let soma = 0;

for (let i = 1; i <= termos; i++) {
    numero += "1";
    soma += Number(numero);
}

console.log("A soma é: " + soma);
}