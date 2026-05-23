/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'jacopo';
const vocals = ['a', 'e', 'i', 'o', 'u',]

// Dichiara la funzione qui.
function accStr (word) {
    if(word) {
        let contatore = 0;
        for(i = 0; i < word.length; i++) {
            if(vocals.includes(word.at(i))) contatore++

        }
        return contatore;
    }
}

// Invoca la funzione qui e stampa il risultato in console
let risultato = accStr(word);
console.log(risultato);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)