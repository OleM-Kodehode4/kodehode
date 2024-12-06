// Asynchtonous JavaScript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rndNumber = Math.random();
    if (rndNumber > 0.5) {
      resolve(rndNumber); // Resolve er en variablel med en funksjon som verdi. Vi sender vårt svar som parameter til denne funksjonen.
    } else {
      reject(new Error("FEILMELDING"));
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// STANDARD ERROR HÅNDTERING / ERROR HANDLING
try {
  console.log(MinVariabelSomIkkeEksisterer);
} catch (err) {
  console.log(err);
} finally {
  console.log("DETTE KJØRES UANSETT OM DET ER FEIL ELLER IKKE");
}
