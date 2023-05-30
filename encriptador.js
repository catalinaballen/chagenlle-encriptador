'mensaje-usuario';

const codigos = { 
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

const codigosDesencriptar = { 
  'ai' : 'a',
  'enter' : 'e',
  'imes' : 'i',
  'ober': 'o',
  'ufat': 'u'
}

var mensaje = document.getElementById('mensaje-final')

function encriptar (){
  let mensajeElement = document.getElementById('mensaje-usuario');
  let mensaje = mensajeElement.value;

  let letras = mensaje.split('');//['h', 'o', 'l', 'a']
  var caracteresProhibidos="ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ!#$%&'()*+,-.\\/:;=?@[\"]^_`{|}~";

  for(let i = 0; i < letras.length; i++){  
    let letra = letras[i]; //o
    if(codigos[letra] !== undefined){
      letras[i] = codigos[letra];
    }
    if (caracteresProhibidos.indexOf(mensaje.charAt(i),0)!=-1){
      return alert("El texto tiene un caracter invalido");
        }
  }

  document.getElementById('mensaje-final').innerHTML = `<p>${letras.join('')}</p>`
}

function desencriptar(){
  let mensajeElement = document.getElementById('mensaje-usuario');
  let mensaje = mensajeElement.value;
  mensaje = mensaje.replace('ai', 'a')
  mensaje = mensaje.replace('enter', 'e')
  mensaje = mensaje.replace('imes', 'i')
  mensaje = mensaje.replace('ober', 'o')
  mensaje = mensaje.replace('ufat', 'u')

  document.getElementById('mensaje-final').innerHTML = `<p>${mensaje}</p>`

}

function copiar() {

  let mensajeElement = document.getElementById('mensaje-final');
  let mensaje = mensajeElement.value;

  
  mensaje.select();
  document.execCommand('copy');

  alert("Copied!");
}


  