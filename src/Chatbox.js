import './Chatbox.css';
import { useState, useEffect } from 'react';
import App from './App';
import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {
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
<<<<<<< HEAD
      sender: "winner",
=======
      sender: "Dtawan",
>>>>>>> 805b55dc010bd53cfcf4316e13a2c25d41ef7551
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
        <div className="App-chatroom">
          {
            lines.map(x => {
              return <div className="App-chatroom-text">
                <div>
                  {x.sender + ":"}
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
        <div className="App-textbox-chatbox-icon" >
          <i class="fas fa-microphone-alt"></i>
          <i class="fas fa-file-upload"></i>
          <i class="fas fa-images"></i>
          <i class="fas fa-camera"></i>
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

export default Chatbox;
