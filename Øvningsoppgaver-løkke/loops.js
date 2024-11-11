// OPPGAVE 1:
console.log("OPPGAVE 1:------------------")
let i = 1;

for (i; i <= 100; i++){
    console.log(i);
}

// OPPGAVE 2:
console.log("OPPGAVE 2:------------------")
for (let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

// OPPGAVE 3:
console.log("OPPGAVE 3:------------------")
let text = "Hei dette er en tekst som skal telle anntall tegn"
let antallBokstaver = 0;

for (let i = 0; i < text.length; i++){
    antallBokstaver++;
}
console.log("Antall bokstaver i teksten: ", antallBokstaver);

// OPPGAVE 4:
console.log("OPPGAVE 4:------------------")
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
console.log("OPPGAVE 5:------------------")
let orgTekst = "Hei dette synest jeg var litt vanskelig";
let reversertTekst = "";

for (let i = orgTekst.length - 1; i >= 0; i--) {
    reversertTekst += orgTekst[i];
}

console.log(reversertTekst);

// OPPGAVE 6:
console.log("OPPGAVE 6:------------------")
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
console.log("OPPGAVE 7:------------------")
let sum = 0;

for (let tall = 1; tall <= 50; tall++){
    if (tall % 2 === 0){
        sum += tall;
    }
}

console.log(sum)

// OPPGAVE 8:
console.log("OPPGAVE 8:------------------")
for (let i = 1;i <= 4; i++){
    let string = "*";
    console.log(string.repeat(i));
}

// OPPGAVE: 10
console.log("OPPGAVE 10:------------------")
text = "Dette er en veldig veldig super duper veldig lang lang tekst";
let words = text.split(" ")
let duplicate = [];
function checkDuplicator(words) {
    for (let i = 0; i <= words.length; i++) {
        for (let j = i + 1; j <= words.length; j++){
            if (words[i] === words[j]) {
                if (!duplicate.includes(words[j]))
                    duplicate.push(words[j]);
            }
        }
    }
    return duplicate;
}
console.log(checkDuplicator(words));


// OPPGAVE 11 - EKSTRA OPPGAVE
console.log("OPPGAVE 11:------------------")
let tall1 = 10;
let tall2 = 20;

for (let i = 0; i < 1; i++){
    let bytteTall = tall1;
    tall1 = tall2;
    tall2 = bytteTall;
}

console.log("Tall1:", tall1);
console.log("Tall2:", tall2);

// MIDDELS:
// ------------------------------
// OPPGAVE 12:
console.log("OPPGAVE 12:------------------")
let numb1 = 0;
let numb2 = 1;
let numbSum;
for (let i = 1; i <= 10; i++){
console.log(numb1)
    numbSum = numb1 + numb2;
    numb1 = numb2
    numb2 = numbSum
}

// EKSTRA OPPGAVER FRA CHATGPT:
// OPPGAVE AI 1:
console.log("OPPGAVE AI 1: Tall fra 0 til 100:------------------")
for (let i = 0; i <= 100; i++){
    console.log(i)
}
console.log("OPPGAVE AI 1: Tall fra 100 til 0------------------")
for (let i = 100; i >= 0; i--){
    console.log(i)
}

console.log("OPPGAVE AI 2:------------------")
let sum2 = 0;
for (let tall = 1; tall <= 100; tall++){
    sum+= tall;
}
console.log(sum)

console.log("OPPGAVE AI 3:------------------")
