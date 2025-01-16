import { useState, useEffect } from 'react'
import './App.css'
import AutoComplete from './Components/AutoComplete'  // Ingen krøll med {} for default eksport

function App() {
    return <AutoComplete />
}

export default App


/*
  // Nå kan vu bestemme når en kode skal kjøres basert på når komponenten rerendrer seg.
  // Effekter skjer etter all annen kode i komponenten. Blir derfor ført kjørt-
  // når komponenten har gjennomført alt som er kodet inn i den. 

  // Denne Effekten vil kjøre ved hver rerendering av komponenten
  // Denne Effekten er uten dependency (avhengighet)
  // Skal ikke ligge i return statment, men utenfor.
  // Syntax:
  // useEffect(() => {
      kode her......  
  // });

  // Denne Effekten er med tomt dependency
  // Blir kun kjørt ved oppstart/on mount(on load) av komponenten.
  // Syntax:
  // useEffect(() => {
      kode her...........
  // }, [])

  // Denne Effekten er med dependency
  // Blir kjørt når en angitt state blir endret.
  // Syntax:
  // useEffect(() => {
      kode her..........
  // }, [count]);

  */

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Test")

//     // Clean up function - Bruker retur delen for å gjøre dette.
//     // Her kan du f.eks. lukke en nettverksoppkobling eller annen opprydding.
//     return console.log("Clean up function")
//   }, []);

//   return <div>
//     <h1>Overskrift</h1>
//     <p>Teller: {count}</p>
//     <button onClick={() => {setCount(count + 1)}}>Klikk meg her er du snill!</button>
//   </div>;
// }



// export default App
