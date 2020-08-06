let a = 0
let b = 0
function seila () {
    var lugar = document.getElementById("postit-criado")//Onde o postit fica
    var tarefa = document.getElementById("tarefa-digitada")//texto
    var tarefaEdit = tarefa.value
    var botaoExcluir = document.createElement("button")
    var botaoEditar = document.createElement("button")
    if(tarefa.value != ""){
        var teste2 = document.createElement("div")//div do postit
        teste2.style.height = "250px"
        teste2.style.width = "220px"
        teste2.style.float = "left"
        teste2.style.marginLeft = "25px"
        teste2.style.marginTop = "30px"
        
        botaoExcluir.style.backgroundColor = "red"
        botaoExcluir.style.height = "20px"
        botaoExcluir.style.width = "80px"
        botaoExcluir.style.position = "absolute"
        botaoExcluir.style.borderStyle = "hidden"
        botaoExcluir.style.marginLeft = "25px"
        botaoExcluir.style.marginTop = "5px"
        botaoExcluir.innerHTML = "Excluir"
        teste2.appendChild(botaoExcluir)
        botaoExcluir.onclick = function () {
            let pergunta = prompt("Deseja excluir o postit?")
            if (pergunta == "sim") {
                teste2.style.display = "none"
            }
        }
        
        botaoEditar.style.backgroundColor = "aquamarine"
        botaoEditar.style.height = "20px"
        botaoEditar.style.width = "80px"
        botaoEditar.style.position = "absolute"
        botaoEditar.style.borderStyle = "hidden"
        botaoEditar.style.marginLeft = "135px"
        botaoEditar.style.marginTop = "5px"
        botaoEditar.innerHTML = "Editar"
        teste2.appendChild(botaoEditar)
        botaoEditar.onclick = function () {
            if (b==0) {
                alert("Modo De Edição. O valor do postit será mandado para \n a área de texto para ser editada.")
                teste2.style.display = "none"
                tarefa.value = tarefaEdit
            } else {
                teste2.style.display = "none"
                tarefa.value = tarefaEdit
            }
            b++
        }

        var teste = document.createElement("div")//postit
        teste.style.width = "180px"
        teste.style.height = "200px"
        teste.style.backgroundColor = "yellow"
        teste.style.float = "left"
        teste.style.marginLeft = "25px"
        teste.style.marginTop = "29px"
        teste.style.textAlign = "center"
        teste.style.wordWrap = "break-word"
        teste.style.padding = "5px"
        
        teste.innerHTML = tarefa.value

        teste2.appendChild(teste)
        lugar.appendChild(teste2)  
        a++ 
    } else{
        alert("Insira algo para ser mostrado no postit.")
    }
    tarefa.value = "" 
}

function exibir () {
    var div = document.getElementById("postit-criado")
    div.style.display = "block"
}

function ocultar () {
    if (a >= 1) {
        var diiv = document.getElementById("postit-criado")
        diiv.style.display = "none"
    } else {
        alert("Não tem postit para ocultar.")
    }
}
