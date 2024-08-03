
import {pedirCarta,valorCarta} from "./"; //como estan en el mismo index 
import { crearCartaHtml } from "./crear-carta-html"; //tambien puuede ser individual





/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento  HTML para mostrar las cartas
 * @param {*} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck =[]) => {

    if(!puntosMinimos) throw new Error ("Puntos minimos son necsario");
    if(!puntosHTML) throw new Error ("Argumento puntosHTML es necesario");
    //if(!deck) throw new Error ("El deck es necsario");

let puntosComputadora=0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta=crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}