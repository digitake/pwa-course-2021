import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
         Hello there 
        </div>
        <div className="App-chatroom-text">
          Heyyo
        </div>
        <div className="App-chatroom-text">
          oh yeah
        </div>
        <div className="App-chatroom-text">
        oh no
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send">Send!</div>
      </div>
    </div>
  );
}

export default App;
