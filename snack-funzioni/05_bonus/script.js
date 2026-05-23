/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function ansMe(userName) {
    if (userName) {
        let hours = new Date().getHours();
        if(hours < 13) {
            return 'buongiorno ' + userName;
        } else if (hours < 17) {
            return 'buon pomeriggio' + userName;
        } else {
            return 'buonasera' + userName;
        }

    }

}


let risultato = ansMe(name)
console.log(risultato);

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.