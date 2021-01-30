import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Samurai
        </div>
        <div className="App-chatroom-text">
          Ronin
        </div>
        <div className="App-chatroom-text">
          Miko
        </div>
        <div className="App-chatroom-text">
          Karumpee
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
