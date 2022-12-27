/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/

function encriptar() {
  const frase = document.getElementById("textoEncriptar").value;
 
  if (frase.trim() != "") {
    let textoEncriptado = frase.replace(/e/gm, "enter");
    textoEncriptado = textoEncriptado.replace(/o/gm, "ober");
    textoEncriptado = textoEncriptado.replace(/i/gm, "imes");
    textoEncriptado = textoEncriptado.replace(/a/gm, "ai");
    textoEncriptado = textoEncriptado.replace(/u/gm, "ufat");

    document.getElementById("ocultarDoll").style.display = "none";
    document.getElementById("aviso1").style.display = "none";
    document.getElementById("aviso2").style.display = "none";

    document.getElementById("textoMostrar").value = textoEncriptado;

    document.getElementById("textoMostrar").style.display = "block";

    document.getElementById("copiar").style.display = "block";
  } else {
    alert("Ingresa el texto que desees encriptar o desencriptar");
  }
}

function desencriptar() {
  const frase = document.getElementById("textoEncriptar").value;

  let textoEncriptado = frase.replace(/enter/gm, "e");
  textoEncriptado = textoEncriptado.replace(/ober/gm, "o");
  textoEncriptado = textoEncriptado.replace(/imes/gm, "i");
  textoEncriptado = textoEncriptado.replace(/ai/gm, "a");
  textoEncriptado = textoEncriptado.replace(/ufat/gm, "u");

  document.getElementById("ocultarDoll").style.display = "none";

  document.getElementById("textoMostrar").value = textoEncriptado;
}

function copiarTexto() {
  const textoContenido = document.querySelector("#textoMostrar");
  textoContenido.select();
  document.execCommand("copy");
  limpiaTexto();
}

function limpiaTexto() {
  document.getElementById("textoEncriptar").value = "";
}

function validarCaracteres(e) {
  const key = e.key,
    letras = "abcdefghijklmnñopqrstuvwxyz",
    //Por una cuestión de legibilidad para el usuario vamos a permitir teclas tales como Enter, espacios, puntos y comas...
    especiales = ["Enter", " ", ".", ",", ";", "Pegar", "Ctrol+V"];

  let tecla_especial = false;

  for (let i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(key) == -1 && !tecla_especial) {
    alert("No ingresar mayúsculas, acentos ni caracteres especiales!!");
    return false;
  }
}
