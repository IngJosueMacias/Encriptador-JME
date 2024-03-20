let botonEncriptar = document.getElementById("boton_encriptar");
let botonDesencriptar = document.getElementById("boton_desencriptar");
let botonCopiar = document.getElementById("boton_copiar");
let botones = document.getElementsByClassName(".boton");
let textoEntrada = document.getElementById("texto_a_encriptar");
let textoSalida = document.getElementById("salida_texto_desencriptar");
let cuerpo = document.querySelector('body');
let contenedorPadre = document.querySelector(".resultado");

function habilitarBotones() {
    botonEncriptar.disabled = false;
    botonDesencriptar.disabled = false;
}

function habilitarCopiado() {
    botonCopiar.disabled = false;
}

function actualizarPagina() {
    if(textoEntrada.value !== ""){
        contenedorPadre.classList.remove("no_texto")
    }
    textoEntrada.focus();
}

function encriptarMensaje() {
    var texto = textoEntrada.value;
    var textoFinal = "";

    if (textoEntrada.value != "") {
        let regExp = /^[a-z\s]+$/;
        if (regExp.test(textoEntrada.value)) {
            for(var i = 0; i < texto.length; i++){
                if(texto[i] == "a"){
                    textoFinal = textoFinal + "ai"
                }
                else if(texto[i] == "e"){
                    textoFinal = textoFinal + "enter"
                }
                else if(texto[i] == "i"){
                    textoFinal = textoFinal + "imes"
                }
                else if(texto[i] == "o"){
                    textoFinal = textoFinal + "ober"
                }
                else if(texto[i] == "u"){
                    textoFinal = textoFinal + "ufat"
                }
                else{
                    textoFinal = textoFinal + texto[i]
                }
            }
            textoSalida.innerHTML = textoFinal;
            textoSalida.value = textoFinal;
            actualizarPagina();
        }
        else {
            alert("Solos se permiten letras minúsculas y sin acentos.");
        }
    }
    else {
        alert("Por favor escribe un texto");
    }
}


function desencriptarMensaje() {
    if (textoEntrada.value != "") {
        let mensajeDesencriptado = textoEntrada.value;
        mensajeDesencriptado = mensajeDesencriptado.replace(/enter/gim, "e");
        mensajeDesencriptado = mensajeDesencriptado.replace(/imes/gim, "i");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ai/gim, "a");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ober/gim, "o");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/gim, "u");
        textoSalida.innerHTML = mensajeDesencriptado;
        textoSalida.value = mensajeDesencriptado;
        actualizarPagina();
    }
    else {
        alert("Por favor escribe un texto");
    }
}

function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        alert("Mensaje copiado");
    }
    else {
        alert("Nada que copiar");
    }
}


botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
textoEntrada.onclick = habilitarBotones;
