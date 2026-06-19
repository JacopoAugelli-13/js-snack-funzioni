

const word = 'jacopo';
const vocals = ['a', 'e', 'i', 'o', 'u',]


function accStr (word) {
    if(word) {
        let contatore = 0;
        for(i = 0; i < word.length; i++) {
            if(vocals.includes(word.at(i))) contatore++

        }
        return contatore;
    }
}


let risultato = accStr(word);
console.log(risultato);


