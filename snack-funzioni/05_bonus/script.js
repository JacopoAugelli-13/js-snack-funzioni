
const name = 'Mario';

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





