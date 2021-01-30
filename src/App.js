import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        App Chat
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Line1
          <div className="App-chatroom">
            Username1
          </div>
          
        </div>
        <div className="App-chatroom-text">
          Line2
          <div className="App-chatroom">
            Username2
          </div>
        </div>
        <div className="App-chatroom-text">
          Line3
          <div className="App-chatroom">
            Username3
          </div>
        </div>
        <div className="App-chatroom-text">
          Line4
          <div className="App-chatroom">
            Username4
          </div>
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