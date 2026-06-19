
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


let risultato = getInitial(names);
console.log(risultato);

// ho ricostruito la funzione utilizzando un altro metodo;

let nomi = [];
const initNames = names.map((fl) => fl.at(0));
console.log(initNames);