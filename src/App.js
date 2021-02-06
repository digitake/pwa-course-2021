import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        REACT CHAT
      </div>
      <div className="panel-footer">
      </div>
      <div className="input-group">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Line1
        </div>
        <div className="App-chatroom-text">
          Line2
        </div>
        <div className="App-chatroom-text">
          Line3
        </div>
      </div>
      <input id="btn-input" type="text"className="form-control-input-sm" placeholder="Type your message here..." />
      <span className="input-group-btn">
        <button className="btnbtn-primarybtn-sm"id="btn-chat">Send your message</button>
      </span>
    </div>
  );
}

export default App;
