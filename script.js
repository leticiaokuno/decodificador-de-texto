const textArea = document.querySelector(".decodificador__input__digitar");
const mensagem = document.querySelector(".decodificador__output__mensagem");
const botaoCopiar = document.querySelector(".decodificador_output");


function botaoCriptografar() {
    const textoCripto = criptografar(textArea.value);
    mensagem.value = textoCripto;
    textArea.value = "";
}


function criptografar(stringCripto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCripto = stringCripto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCripto.includes(matrizCodigo[i][0])) {
            stringCripto = stringCripto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCripto;
}




function botaoDescriptografar() {
    const textoDescripto = descriptografar(textArea.value);
    mensagem.value = textoDescripto;
    textArea.value = "";
}


function descriptografar(stringDescripto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescripto = stringDescripto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescripto.includes(matrizCodigo[i][1])) {
            stringDescripto = stringDescripto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescripto;
}




document.getElementById("botao-copiar").onclick = (e) => {
    e.preventDefault();
    const botaoCopiar = document.querySelector(".decodificador__output");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
    mensagem.value = "";
  }

