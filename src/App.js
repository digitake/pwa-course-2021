import './App.css';
import LinkTo from './Components/LinkManager';

function App({ children }) {
  return (
    <div className="App col-6">
      <div className="App-header">

        <LinkTo value='Home' to='home' />
        <LinkTo value='Feed' to='feed' />
        <LinkTo value='Chat' to='chat' />
        <LinkTo value='Friends' to='friend-list' />
        <LinkTo value='My Profile' to='profile' />

      </div>

      <div className='App-content'>
        {children}
      </div>
    </div>

  );
}

export default App;
