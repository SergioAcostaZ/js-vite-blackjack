

/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if (!deck|| deck.length === 0 ) { //Si el Deck no existe o el deck es igual a cero cartas
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}