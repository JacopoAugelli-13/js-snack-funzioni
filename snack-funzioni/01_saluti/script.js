
const userName = 'Mario';

// Dichiara la funzione qui.
function ansMe (userName) {
    if (userName !== undefined)
         return 'ciao ' + userName;
    return 'nessun nome specificato';
}


let risultato = ansMe(userName)
console.log(risultato);