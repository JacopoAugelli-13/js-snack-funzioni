/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitial(names) {
    if (names !== null && names.length > 0) {
        let names1 = []
        for (i = 0; i < names.length; i++) {

            names1.push(names.at(i).at(0))
            
        }
        return names1;
    }

}

// Invoca la funzione qui e stampa il risultato in console
let risultato = getInitial(names)
console.log(risultato)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]