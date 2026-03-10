function num2(){

let opcoes = ["pedra", "papel", "tesoura"];

let usuario = prompt("Escolha: pedra, papel ou tesoura");

let computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Você escolheu: " + usuario);
console.log("O Computador escolheu: " + computador);

if (usuario === computador) {
    console.log("Empate!");
}
else if (
    (usuario == "pedra" && computador == "tesoura") ||
    (usuario == "papel" && computador == "pedra") ||
    (usuario == "tesoura" && computador == "papel")
) {
    console.log("Você venceu!");
}
else {
    console.log("O Computador venceu!");
}

}