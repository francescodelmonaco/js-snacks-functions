/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letter = prompt(`Inserisci una lettera dell'alfabeto`, `A`);

// Dichiara la funzione qui.

// function letterArray (letter) {
//     let letterNames = [];

//     for (let i=0; i<names.length; i++) {

//         if (names[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
//             letterNames.push(names[i]);
//         }

//     }

//     return letterNames;
// }

// Invoca la funzione qui e stampa il risultato in console

// console.log (letterArray (letter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// ARROW FUNCTION

const letterArray = (letter) => {
    let letterNames = [];

    for (let i=0; i<names.length; i++) {

        if (names[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            letterNames.push(names[i]);
        }

    }

    return letterNames;   
}

console.log (letterArray (letter));