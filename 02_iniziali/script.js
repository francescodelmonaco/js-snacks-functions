/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// function arrayIniziali (x) {
//     let iniziali = [];

//     for (let i=0; i<x.length; i++) {
//         iniziali.push (x[i].charAt(0));
//     }

//     return iniziali;
// }

// Invoca la funzione qui e stampa il risultato in console

// console.log (arrayIniziali (names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// ARROW FUNCTION

const arrayIniziali = (x) => {
    let iniziali = [];

    for (let i=0; i<x.length; i++) {
        iniziali.push (x[i].charAt(0));
    }

    return iniziali;
}

console.log (arrayIniziali (names));