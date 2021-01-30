import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          กูนึกแล้ว มึงต้องอ่าน
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          กูกะแล้วตรงนี้ก็อ่าน
        </a>
      </header>
    </div>
  );
}

export default App;
