//criando os preços dos combustiveis
const precoGasolina = 6.69;
const precoEtanol = 4.30;
const precoDiesel = 6.03;

//funcao para identificar o tipo do combistivel
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    //Escolha do combustivel
    let precoPorLitro;
    switch(tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;  
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção!")
            return;
    };
    //console.log(precoPorLitro);
    let litros = parseFloat(document.getElementById("litros").value);
    calcularValorAbastecimento(precoPorLitro, litros);
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

//funcao para receber os dados do combustivel (tipo e qtd de litros)
function calcularValorAbastecimento(precoCombustivel, litros){
    //let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;

    if(litros<=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira um valor válido";
        return;
    } else {
       let valorTotal = precoCombustivel * litros; 
        document.getElementById("resultado").textContent = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }
};

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

//evitar com que a pagina seja recarregada
litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
    event.preventDefault();
    atualizarValor();
    }
});