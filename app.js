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

    const frase = document.getElementById("textoEncriptar").value.toLowerCase();
    console.log(frase);

    let textoEncriptado = frase.replace(/e/mg, 'enter');
    console.log(textoEncriptado);
     textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
     console.log(textoEncriptado);
     textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
     textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
     textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');

     document.getElementById("ocultarDoll").style.display="none";
     document.getElementById("aviso1").style.display="none";
     document.getElementById("aviso2").style.display="none";

     document.getElementById("textoMostrar").value = textoEncriptado;

     document.getElementById("textoMostrar").style.display = 'block';

     document.getElementById("copiar").style.display = 'block';



     

}

function desencriptar() {

    const frase = document.getElementById("textoEncriptar").value.toLowerCase();
    console.log(frase);

    let textoEncriptado = frase.replace(/enter/mg, 'e');
    console.log(textoEncriptado);
     textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
     console.log(textoEncriptado);
     textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
     textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
     textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');

     document.getElementById("ocultarDoll").style.display="none";

     document.getElementById("textoMostrar").value = textoEncriptado;

     

}

function copiarTexto(){

    const textoContenido = document.querySelector("#textoMostrar")
    textoContenido.select();
    document.execCommand("copy");
}