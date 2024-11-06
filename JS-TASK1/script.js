// JSDoc Comment
/**
 * @param {Array} 
 * @param {number} 
 * @returns {string} 
 */

//OPPGAVE-1
const setning = "Dette er en veldig lang setning!";

function byttText (text){
    console.log(text.length)

    let centerIndex = text.length / 2;
    console.log(centerIndex);

    console.log(text.slice(-16),text.slice(0,16));
}

byttText(setning)

//OPPGAVE-2
const tekst = "dette er en tekst skrevet i små bokstaver.";
let tilstore = false;

console.log(upperCase(tekst, tilstore));

function upperCase(text, storebokstaver){
    if (storebokstaver){
    return text.toUpperCase();
    } else{
        return text.toLowerCase();
    }
}

//OPPGAVE-3
function ukedagTekst(dag) {
    // dag = dag.toLowerCase();

    switch (dag.toLowerCase()) {
        case 'mandag':
            console.log("Det er mandag og jeg er veldig trøtt og vil ha helg igjen.");
            break;
        case 'tirsdag':
            console.log("Det er tirsdag savnet til helg er her enda men ikke like trøtt.");
            break;
        case 'onsdag':
            console.log("Det er onsdag det er ikke lenge til helg igjen.");
            break;
        case 'torsdag':
            console.log("Nå er det torsdag og bare en dag igjen før det endelig er helg.");
            break;
        case 'fredag':
            console.log("Det er endelig fredag, det blir taco til middag med ett glass eller to iskald pepsi max.");
            break;
        case 'lørdag':
            console.log("Endelig var det lørdag igjen, nå skal jeg bruke lørdagen til å gjøre at jeg ikke fikk gjort i uka.");
            break;
        case 'søndag':
            console.log("Da var det søndag da.... fikk jeg gjort noe annet enn å ligge som en død spekkhogger på sofan igår? Svaret er NEI.... Imorgen starter mandag igjen ja...");
            break;
        default:
            console.log("Du må da faktisk sette inn en gyldig ukedag...");
            break;
    }
}

ukedagTekst("Mandag");
// ukedagTekst("Tirsdag");
// ukedagTekst("Onsdag");
// ukedagTekst("Torsdag");
// ukedagTekst("Fredag");
// ukedagTekst("Lørdag");
// ukedagTekst("Søndag")

//OPPGAVE-4
function sjekkBokstaver(tekst) {
    tekst = tekst.trim().toLowerCase();
    if (tekst.length === 0){
        console.log("Skriv ett gyldig ord");
        return false;
    }

    let forsteBokstav = tekst.charAt(0);
    let sisteBokstav = tekst.charAt(tekst.length - 1); // Måtte bruke internett for hjelp på dessee linjene ↑.

    if(forsteBokstav === sisteBokstav){
        console.log("Teksten starter og slutter med samme bokstav")
        return true;
    } else {
        console.log("Teksten starter og avslutter ikke med samme bokstav");

    }
}

sjekkBokstaver("kayakk")
// sjekkBokstaver("cognac")
sjekkBokstaver("hei")
// sjekkBokstaver("Norge")

//OPPGAVE-5
function finnTekst (tekst, liste) {
    if (liste.includes(tekst)){
        return true;
    } else{
        return false;
    }
}
console.log(finnTekst("Salah", ["Messi", "Salah", "Son", "Ronaldo"]))

//OPPGAVE-6
let liste = ["pizza", "burger", "fisk", "fiskebolla", "tortilla", "nachos", "løvsteik", "fløtegratinertepotete"]

function firstAndLast (list){
    let first;
    first = list.shift();
    let last;
    last = list.pop();
    return first + last;
}
let svar;

svar = firstAndLast(liste);
console.log(svar);

// OPPGÅVE 7
function checkForTextJavaScript(text){
    return text.includes("JavaScript")
}

console.log(checkForTextJavaScript("Dette er en tekst som inneholder ordet JavaScript")) 

//OPPGAVE 9
function checkAge(age){
    if (age < 0){
        return "Du er ikke født";
    }else{
        if (age < 13){
            return "Barn";
    }
    if (age >= 13 && age <= 19){
        return "Tennåring";
    }
    if (age >= 20 && age <=64){
        return "Voksen";
    } else {
        return "Pensjonist"
    }
    }
}

console.log(checkAge(20));

//OPPGAVE 10
function checkVocal(char){
    const charLowerCase = char.toLowerCase();
    const vocals = "aeiouyæøå";
    const v = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"]

    if (vocals.includes(charLowerCase)){
        return "Vokal";
    } else {
        return "Konsonant"
    }
}

console.log(checkVocal("E"))

//OPPGAVE 11
function getSeason(month){
    month = month.toLowerCase();
    switch(month){
        case "december":
        case "january":
        case "february":
            return "Winter";
        case "march":
        case "april":
        case "may":
            return "Spring"
        case "june":
        case "july":
        case "august":
            return "Summer"
        case "september":
        case "october":
        case "november":
            return "Autum"

        default:
            return "Not an actual month"
    }
}

console.log(getSeason("december"));

//OPPGAVE 12
let weatherList = ["Rainy", "Sunny", "Snowy", "Windy"];
function Weather(){
    console.log(weatherList.slice(1, -1));
}
Weather();
console.log(weatherList);