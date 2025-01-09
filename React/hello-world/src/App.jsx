import Header from './components/header';
import Greeting from './components/header';
import Header2 from './components/header2';
import Header3 from './components/header3';


function App() {

  return (
    <div>
    <Header />    
    <Header2 text="Hei på deg" name="Ole" age="20" hobbies="Gaming" />
    <Greeting />
    <Header3 />
    </div>
  );
}

export default App
