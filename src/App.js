import { Link } from 'react-router-dom';
import './App.css';
import LinkTo from './Components/LinkManager';

function App({ children }) {
  return (
    <div className="App">

      <div className="App-header">
        <LinkTo value='Friend List' to='friend-list' />
        <LinkTo value='Test' to='friend-list' />
      </div>


      <div className='App-content'>
        {children}
      </div>
    </div>
  );
}

export default App;
