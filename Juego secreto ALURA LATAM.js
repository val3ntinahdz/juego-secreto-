let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor. ')
        }
        intentos++
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el número generado está incluido en la lista, hacemos una operación, sino, hacemos otra.

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles!');
   } else {
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
   
   }
    

}   


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Selecciona un número del 1 al 10:'); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
   //limpiar caja
   limpiarCaja();
   //indicar mensaje de intervalo de números 
   //generar el número aleatorio 
   //Inicializar el número de intentos 
   condicionesIniciales();
   //Desahilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();