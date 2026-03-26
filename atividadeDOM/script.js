//Contador
var n = 0;

document.getElementById("botaoIncremento").onclick = function(){
    n = n + 1;
    document.getElementById("Contador").innerHTML = n;
}

document.getElementById("botaoDecremento").onclick = function(){
    if(n > 0){
        n = n - 1;
        document.getElementById("Contador").innerHTML = n;
    } else {
        alert("O Contador já está em zero!")
    }
}

//Texto

document.getElementById("texto").oninput = function(){
    var caracteres = document.getElementById("texto").value;
    var semEspaco = caracteres.replace(/ /g, "");
    document.getElementById("caracteres").innerHTML = semEspaco.length + "caracteres";
};

document.getElementById("texto").onkeydown = function(e){
    if (e.key === "Enter") {
        var p = document.createElement("p");
        p.innerHTML = document.getElementById("texto").value;
    
        document.getElementById("frases").appendChild(p);
        document.getElementById("texto").value = "";
        document.getElementById("contador").innerHTML = "0 caracteres";
    }
}

//Lista
document.getElementById("AddLista").onclick = function(){
    var tipo = document.getElementById("tipoLista").value;
    var lista = document.createElement(tipo);

    var item1 = document.createElement("li");
    item1.innerHTML = "Item 1";

    var item2 = document.createElement("li");
    item2.innerHTML = "Item 2";

    var item3 = document.createElement("li");
    item3.innerHTML = "Item 3";

    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);

    document.getElementById("listas").appendChild(lista);
}

//Reset
document.getElementById("botaoReset").onclick = function(){
    location.reload();
}