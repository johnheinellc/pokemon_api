import logo from './logo.svg';
import './App.css';
import PokeApi from './components/PokeApi';

function App() {
  return (
    <div className="App">
      <h1>Poke API</h1>
      <PokeApi></PokeApi>
    </div>
  );
}

export default App;
// https://pokeapi.co/api/v2/pokemon?/limits=1000