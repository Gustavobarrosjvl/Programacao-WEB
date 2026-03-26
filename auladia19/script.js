//Eventos

//Propriedades
let botao1 = document.getElementById("botao1");

//Manipuladores de eventos
botao1.onclick = function(){
    alert("Primeiro de evento")
};

//segunda ação
botao1.onclick = function(){
    botao1.textContent = "Texto Alterado";
};

//trocar de cor
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red";
};

//voltar cor original
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "";
};

botao2.ondbclick = function(){
    botao2.textContent = ""
}

let campoEntrada = document.getElementById("campo");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("teste");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
}