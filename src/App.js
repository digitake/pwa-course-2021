import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Klongkwan Wanngam</h3>
        <h2>1620704005</h2>
        <p>
          Mobile dev
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
