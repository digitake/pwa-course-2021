import './App.css';
import { useState, useEffect } from 'react';
import App from './App';
import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-2');

function ChatBot() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines(l => [...l, {
        sender: x.sender,
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
    })

  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    chatroomRef.push({
      sender: "Bot:01",
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  };

  return (
    <App>
      <div className="App">
        <div className="App-content">
          {
            lines.map(x => {
              return <div className="App-content-text">
                <div>
                  {x.sender}
                </div>
                <div>
                  {x.message}
                </div>
                <div>
                  {x.timestamp.toLocaleString()}
                </div>
              </div>
            })
          }
        </div>
        <div className="App-chatbot-icon" ><i class="fas fa-microphone"></i>
          <i class="fas fa-handshake"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-volume-up"></i>
        </div>
        <div className="App-textbox">
          <input type="text" className="App-textbox-input"
            value={text} onChange={onTextChange} onKeyPress={keyPress} />
          <div className="App-textbox-send" onClick={onSend}> <i class="far fa-paper-plane"></i> </div>
        </div>
      </div>
    </App>
  );
}

export default ChatBot;