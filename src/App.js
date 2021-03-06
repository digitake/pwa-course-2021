import './App.css';
import LinkTo from './Components/LinkManager';

function App({ children }) {
  return (
    <div className="App">
      <div className="App-header">
        <LinkTo value='Home' to='home' />
        <LinkTo value='Chat' to='chat' />
        <LinkTo value='Feed' to='feed' />
      </div>

      <div className='App-content'>
        {children}
      </div>
    </div>
      
  );
}

export default App;
