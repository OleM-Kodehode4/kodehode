// Asynchtonous JavaScript
const myPromise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   const rndNumber = Math.random();
  //   if (rndNumber > 0.5) {
  //     resolve(rndNumber); // Resolve er en variablel med en funksjon som verdi. Vi sender vårt svar som parameter til denne funksjonen.
  //   } else {
  //     reject(new Error("FEILMELDING"));
  //   }
  // }, 1000);
});

myPromise
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.log(error);
  });

// STANDARD ERROR HÅNDTERING / ERROR HANDLING
try {
  // console.log(MinVariabelSomIkkeEksisterer);
} catch (err) {
  // console.log(err);
} finally {
  // console.log("DETTE KJØRES UANSETT OM DET ER FEIL ELLER IKKE");
}

// API - Application Programmering Interface // Kommunikasjon mellom 2 pc'er (Veldig forenklet forklaring)
// RESTful API
// JSON - JavaScript Object Notation != JS Object (Nesten Identisk)

// Fetch
// Hva er en URL: Uniform Resource Locator.
// Eksempler på url:
// http://vg.no -> Nettstedsadresse
// 192.168.1.1/ -> IP Adresse
// C:\minMappe\minFil.txt -> Path (Filstil)
// Tar imot en URL til en ressurs som er et API endepunkt (API Endpoint).
// Har innebygd promise, så må vi bruke .then og .catch
// .json er også en async funksjonskall. HUSK Å CHAINE .then igjen etter denne.
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) =>
//     res.json().then((data) => {
//       console.log(data);
//     })
//   )
//   .catch((err) => {
//     console.log(err); // Returnerer en feilmelding
//   });

// fetch("https://random.dog/woof.json")
//   .then((res) =>
//     res.json().then((data) => {
//       getData(data.url);
//     })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

// function getData(imgsrc) {
//   const dogImgElem = document.createElement("img");
//   dogImgElem.src = imgsrc;
//   dogImgElem.style.height = "200";
//   document.body.append(dogImgElem);
// }

const apiEndpoint = "http://gutendex.com/books";

// OBS: Denne funksjonen må være async fordi den bruker async funksjoner som fetch og .json med keywordet await.
async function getBook(id) {
  try {
    const result = await fetch(`${apiEndpoint}`);
    const data = await result.json();
    renderSite(data);
  } catch (error) {
    console.log(error);
  }
}
function renderSite(data) {
  console.log(data);
}
getBook(1);
