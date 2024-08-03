
import _ from "underscore";
//**Importacion del modulo defaul | se puede agregar esta importacion automaticamente con la extension typescript import al escribir la funcion en el codigo */
//**NOTA: cuando es una exportacion por default y/o automatica del ide hay que quitarle las llaves */
//**Lo que esta entre llave {miNombre}, es un variable que se exporto de manera independiente*/
//import {crearDeck} from "./usecases/crear-deck"; 
//import {crearDeck as crearNuevoDeck} from "./usecases/crear-deck.js"; // se puede renombrear cob as y trabajar con ese nuevo nombre en este archivo
//import {crearDeck} from "./usecases/crear-deck.js";  //importscion independiente; dentro de las llaves se puede poner mas elementos separados por coma

import { crearDeck,valorCarta,pedirCarta, turnoComputadora, crearCartaHtml} from "./usecases/index";




/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');



deck=crearDeck (tipos,especiales);



// const valorCarta = ( carta ) => {

//     const valor = carta.substring(0, carta.length - 1);
//     return ( isNaN( valor ) ) ? 
//             ( valor === 'A' ) ? 11 : 10
//             : valor * 1;
// }





// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHtml(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador,puntosHTML[1],divCartasComputadora,deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador,puntosHTML[1],divCartasComputadora,deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador,puntosHTML[1],divCartasComputadora,deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos,especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

