/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let orario = prompt(`Scrivi un'ora`, `22`);


// Dichiara la funzione qui.
function saluto (x) {
    if (x>0 && x<=13 ) {
        return console.log (`Buongiorno ${name}`)
    } else if (x>13 && x<=17) {
        return console.log (`Buon pomeriggio ${name}`)
    } else {
        return console.log (`Buonasera ${name}`)
    }
}


// Invoca la funzione qui e stampa il risultato in console
console.log (saluto (orario));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.