function num1(){

let numeroRDM = Math.floor(Math.random() * 20) + 1;

let tentativa = 0;

while (tentativa != numeroRDM){

    tentativa = Number(prompt("Adivinhe o número entre 1 e 20"));

    if (tentativa > numeroRDM) {
        console.log("O número secreto é MENOR");
    } 
    else if (tentativa < numeroRDM) {
        console.log("O número secreto é MAIOR");
    } 
    else {
        console.log("Parabéns! Você acertou o número: " + numeroRDM);
    }
}
}