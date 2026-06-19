
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function getInitial(names, initial) {
    if (names !== null && names.length > 0) {


        let names1 = [];

        for (i = 0; i < names.length; i++) {
            if (names.at(i).at(0) === initial)
                names1.push(names.at(i))
        }
        return names1;
    }
}

let risultato = getInitial(names, 'A');
console.log(risultato)



