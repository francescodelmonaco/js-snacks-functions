/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// function saluto (x) {
//     return saluto(x);
// }

// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso se si passa 'Mario': // ciao Mario


// ARROW FUNCTION

const saluto = (x) => console.log (`Ciao ${x}`);
saluto(userName)