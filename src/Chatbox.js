import './Chatbox.css';
import {useState , useEffect} from 'react';
import App from './App';
import firebase from '/firebaseConfig';

const chatroomRef = firebase.datebase().ref('chatroom=1');

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect (() => {
    chatroomRef.on('child_added', snapshot =>{
      let x= snapshot.val();
      setLines(l => [...l, {
        sender: x.sender,
        message: x.message,
        timestamp: new Date(x.timestamp)
      }])
    });
  }, []);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    chatroomRef.push({
      sender: "Me",
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  }

  return (
    <App>
    <div className="App col-6">
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
              <div className= "App-chatroom-text-sender">
              {x.sender+": "}
              </div>
              <div className= "App-chatroom-text-massage">
                <div>
                {x.message}
                </div>
                <div>
                {x.timestamp.toLocaleString()}
              </div>
              </div>
              </div>
          })
        }
    </div>
    <div className="App-textbox">
      <input type="text" className="App-textbox-Input" 
      value={text} onChange={onTextChange} onKeyPress={keyPress}/>

      <div className="App-textbox-send" onClick={onSend}>Send</div>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;
