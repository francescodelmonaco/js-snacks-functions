/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.

// function controlloVocali (word) {
//     let numeroVocali = 0;

//     for (let i=0; i<word.length; i++) {

//         for (let x=0; x<vocali.length; x++) {
//             if (word[i] === vocali[x]) {
//                 numeroVocali++;
//             }
//         }

//     }

//     return numeroVocali;
// }

// Invoca la funzione qui e stampa il risultato in console

// console.log (controlloVocali (word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// ARROW FUNCTION

const controlloVocali = (word) => {
    let numeroVocali = 0;

    for (let i=0; i<word.length; i++) {

        for (let x=0; x<vocali.length; x++) {
            if (word[i] === vocali[x]) {
                numeroVocali++;
            }
        }

    }

    return numeroVocali;  
}

console.log (controlloVocali (word));