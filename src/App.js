import './App.css';
import LinkTo from './Components/LinkManager';

function App({ children }) {
  return (
    <div className="App">
      <div className="App-header">
        <LinkTo value='Home' to='home' />
        <LinkTo value='Chat' to='chat' />
<<<<<<< HEAD
        <LinkTo value='Feed' to='feed' />
=======
        <LinkTo value='Feed' to='friend-list' />
        <LinkTo value='Friend List' to='friend-list' />
        
>>>>>>> 398916516a420aaa55dc5b104a6d9f4b948e5e96
      </div>

      <div className='App-content'>
        {children}
      </div>
    </div>
      
  );
}

export default App;
