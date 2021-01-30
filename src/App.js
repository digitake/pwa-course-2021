import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Line1 context
        </div>
        <div className="App-chatroom-text">
          Line2 context
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
