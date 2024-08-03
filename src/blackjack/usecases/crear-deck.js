
// import {shuffle} from "underscore"; //poniendo shufdle entre llaves solo se importa esta funcion 

import _ from "underscore";



// Esta función crea un nuevo deck

//export const crearDeck = (tiposDeCarta,tiposEspeciales) => {  //asi se exporta modulo individual o independiente 



//export let miNombre="Sergio"; //exportacion independiente

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck=(tiposDeCarta,tiposEspeciales)=>{
    if (!tiposDeCarta || tiposDeCarta.length===0) 
        throw new Error("TiposDeCarta es obligatorio como un arreglo de string"); //Si esto es nulo o undefined se lanzara un error

    if (!tiposEspeciales || tiposDeCarta.length===0) 
        throw new Error("TiposEspeciales es obligatorio como un arreglo de string"); //Si esto es nulo o undefined se lanzara un error
    
        let deck=[];
    
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tiposDeCarta ) {
                deck.push( i + tipo);
            }
        }
    
        for( let tipo of tiposDeCarta ) {
            for( let esp of tiposEspeciales ) {
                deck.push( esp + tipo);
            }
        }
        // console.log( deck );
        deck = _.shuffle( deck );
        
        return deck;

}

//export default crearDeck; //Exportacion por defecto || se poner el nombre de la función 