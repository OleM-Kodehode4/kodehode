// OPPGAVE 1:
let i = 1;

for (i; i<101; i++){
    console.log(i);
}

// OPPGAVE 2:
for (let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

// OPPGAVE 3:
let tekst = "Hei dette er en tekst som skal telle anntall tegn"
let antallBokstaver = 0;

for (let i = 0; i < tekst.length; i++){
    antallBokstaver++;
}
console.log("Antall bokstaver i teksten: ", antallBokstaver);

// OPPGAVE 4:
function stortTall(liste) {
    let storstTall = liste[0];
    for (let i =1; i < liste.length; i++){
        if (liste[i] > storstTall){
            storstTall = liste[i];
        }
    }
    return storstTall; 
}
const tallPaaEnListe = [14,22,45,33,22,12,44,55,77,86,23,45,11,8,2,3,5,56,78];
console.log(stortTall(tallPaaEnListe));

// OPPGAVE 5:
let orgTekst = "Hei dette synest jeg var litt vanskelig";
let reversertTekst = "";

for (let i = orgTekst.length - 1; i >= 0; i--) {
    reversertTekst += orgTekst[i];
}

console.log(reversertTekst);

// OPPGAVE 6:
// for (let tall = 1; tall <= 20; tall++){
//     if (tall === 10){
//     } else {
//         console.log(tall)
//     }
// }

for (let tall = 1; tall <= 20; tall++){
    if (tall === 10){
        continue;
    }
    console.log(tall)
}


// OPPGAVE 7:
let sum = 0;

for (let tall = 1; tall <= 50; tall++){
    if (tall % 2 === 0){
        sum += tall;
    }
}

console.log(sum)

// OPPGAVE 8:

// OPPGAVE 11 - EKSTRA OPPGAVE
let tall1 = 10
let tall2 = 20;

for (let i = 0; i < 1; i++){
    let bytteTall = tall1;
    tall1 = tall2;
    tall2 = bytteTall;
}

console.log("Tall1:", tall1);
console.log("Tall2:", tall2);