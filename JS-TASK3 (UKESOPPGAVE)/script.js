console.log(" ")
// OPPGAVE 1a:
console.log("OPPGAVE 1a:------------------")

let fname = "Ole";

console.log(fname);

console.log(" ")
// OPPGAVE 1b:
console.log("OPPGAVE 1b:------------------")

function numbSum(numb1b, numb2b){
    return numb1b + numb2b;
}

console.log(numbSum(8,9));
console.log(" ")
// OPPGAVE 2:
console.log("OPPGAVE 2:------------------")

function calculateAge(birth){
    const thisYear = 2024;
    return thisYear - birth;
}
const birth = 2004;
console.log(`Eg er ${calculateAge(birth)} år gammal.`);

console.log(" ")
// OPPGAVE 3:
console.log("OPPGAVE 3:------------------")
function checkNumb(numb3){
    if (numb3 > 0 ){
        console.log("Dette tallet er et positivt tall");
    } else if (numb3 < 0) {
        console.log("Dette tallet er et negativt tall");
    } else{
        console.log("Dette tallet er null")
    }
}
console.log("Positivt:")
checkNumb(8)
console.log(" ")
console.log("Negativt:")
checkNumb(-44)
console.log(" ")
console.log("Null:")
checkNumb(0)

console.log(" ")
// OPPGAVE 4a:
console.log("OPPGAVE 4a:------------------")
for  (let i = 0; i<=20; i++){
    console.log(i)
}

console.log(" ")
// OPPGAVE 4b:
console.log("OPPGAVE 4b:------------------")
function sumEvenNumb(){
    let sum = 0;

    for(let i = 1; i <= 100; i++){
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumEvenNumb());

console.log(" ")
// OPPGAVE 5a:
console.log("OPPGAVE 5a:------------------")
function reverseString(stri){
    let reversed = '';
    for(let i = stri.length -1; i >= 0; i--){
        reversed += stri[i];
    }
    return reversed
}

console.log(reverseString("Hei, denne superlange teksten er i bakvendtland"));

console.log(" ")
// OPPGAVE 5b:
console.log("OPPGAVE 5b:------------------")
function changeChar(str){
    if (str.length < 7) {
        return "Feil: Teksten du skriver inn er for kort til å gjøre endringen.";
    }
    let charArray = str.split('');

    let char3 = charArray[2];
    let char5 = charArray[4];
    let char7 = charArray[6];

    charArray[2] = char5;
    charArray[4] = char7;
    charArray[6] = char3;

    return charArray.join('')
}

console.log(changeChar("abcdefg"));
console.log(changeChar("abc"));

console.log(" ")
// OPPGAVE 6a:
console.log("OPPGAVE 6a:------------------")
function findMedian(arr) {
    arr.sort((a, b) => a - b);

    const lengde = arr.length;

    if (lengde % 2 !== 0) {
        const midle = Math.floor(lengde / 2);
        return arr[midle];
    } else {
        const midle1 = lengde / 2 - 1;
        const midle2 = lengde / 2;
        return (arr[midle1] + arr[midle2]) / 2;
    }
}


const numb6a = [5, 3, 8, 1, 2];
console.log(findMedian(numb6a));

console.log(" ")
// OPPGAVE 6b:
console.log("OPPGAVE 6b:------------------")
function antallUnike(arr) {
    const unikeVerdier = new Set(arr);

    return unikeVerdier.size;
}

const numb6b = [1, 2, 2, 3, 4, 4, 5, 7, 7, 8, 5, 2, 4, 5, 7, 1, 10, 12];
console.log(antallUnike(numb6b));

console.log(" ")
// OPPGAVE 7a:
console.log("OPPGAVE 7a:------------------")
let year = 1992;

if (year % 4 === 0) {
  console.log("Året er ett skuddår");
} else {
  console.log("Året er ikkje skuddår");
}

console.log(" ")
// OPPGAVE 7b:
console.log("OPPGAVE 7b:------------------")
function skrivRetninger(retninger) {
    for (let i = 0; i < retninger.length; i++) {
        let tegn = retninger[i];
        
        switch (tegn) {
            case '>':
                console.log("Høyre");
                break;
            case '<':
                console.log("Venstre");
                break;
            case 'v':
                console.log("Ned");
                break;
            case '^':
                console.log("Opp");
                break;
            default:
                console.log("Ugyldig tegn");
                break;
        }
    }
}

skrivRetninger('><^v');

// OPPGAVE 8:
console.log("OPPGAVE :------------------")
function beregnAlder(fodselsdato) {
    const fodselsdatoObj = new Date(fodselsdato);
    
    const dagensDato = new Date();
    
    let alderAar = dagensDato.getFullYear() - fodselsdatoObj.getFullYear();
    
    const mndFodselsdag = fodselsdatoObj.getMonth();
    const dagFodselsdag = fodselsdatoObj.getDate();
    const mndDagensDato = dagensDato.getMonth();
    const dagDagensDato = dagensDato.getDate();
    
    if (mndDagensDato < mndFodselsdag || (mndDagensDato === mndFodselsdag && dagDagensDato < dagFodselsdag)) {
        alderAar--;
    }
    
    let alderMnd = mndDagensDato - mndFodselsdag;
    if (alderMnd < 0) {
        alderMnd += 12;
    }

    let alderDager = dagDagensDato - dagFodselsdag;
    if (alderDager < 0) {
        const forrigeMnd = new Date(dagensDato.getFullYear(), dagensDato.getMonth(), 0);
        alderDager += forrigeMnd.getDate();
    }

    return `${alderAar} år, ${alderMnd} måneder, ${alderDager} dager`;
}

console.log(beregnAlder('2004-08-28'));  
