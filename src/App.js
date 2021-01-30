import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Love
        </div>
        <div className="App-chatroom-text">
          Or
        </div>
        <div className="App-chatroom-text">
          Not
        </div>
        <div className="App-chatroom-text">
          So Many
        </div>
        <div className="App-chatroom-text">
          Cure 
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send">Send!</div>
      </div>

    </div>
  );
}
// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
