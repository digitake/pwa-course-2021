import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        User
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Chat Line1
        </div>
        <div className="App-chatroom-text">
          Chat Line2
        </div>
        <div className="App-chatroom-text">
          Chat Line3
        </div>
        <div className="App-chatroom-text">
          Chat Line4
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
