import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Facebug Messager
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          <div className = "App-chatroom-name-text">
            Bob
            </div>
          girl call me to come over because no one was home.
        </div>
        <div className="App-chatroom-sender-text">
          <div className = "App-chatroom-sender-name-text">
            Jay
            </div>
          so you went to see her but what make you sad bro.
          <div className = "App-chatroom-seen-text" >
            SEEN 5:35 PM
            </div>
        </div>
        <div className="App-chatroom-text">
          <div className = "App-chatroom-name-text">
          Bob
            </div>
          I went to see her but no one was home.
        </div>
        <div className="App-chatroom-sender-text">
          <div className = "App-chatroom-sender-name-text">
            Jay
            </div>
          ok, that is saddest story I've ever heard.
          <div className = "App-chatroom-seen-text" >
            SEEN 5:35 PM
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
