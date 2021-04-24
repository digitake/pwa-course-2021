import './Chatbox.css';
import { useEffect, useState } from 'react';
import App from './App';
import firebase from './firebaseConfig';
import logo2 from './LoginIcon.png'

const chatroomRef = firebase.database().ref('chatroom-1');


function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() =>{
    chatroomRef.on('child_added', snapshot =>{
      let x = snapshot.val();

      setLines(line => [...line,{
        sender: x.sender,
        Message: x.Message,
        timestamp: new Date(x.timestamp)
      }])
    });

  },[]);

  const onTextChange = (event) =>{
    setText(event.target.value);
  };

  const onSend = () =>{
    chatroomRef.push({
      sender: "Min",
      Message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    
    setText("");
  };

  const keyPress = (event) => {

    if (event.which === 13){
      onSend();
    }
  }
  return (
      <App>
        <div className="Chatbox">
          <div className="Chatbox-chatroom">
            {
              lines.map(x => {
                return <div className="Chatbox-chatroom-text">
                          <div className="App-chatroom-sender">
                            {x.sender+":>"}
                          </div>
                          <div className="App-chatroom-message">
                            {x.Message}
                          </div>
                          <div>
                              {x.timestamp.toLocaleString()}
                          </div>
                      </div>
            })
          }
          </div>
      <div className="Chatbox-textbox">
        <input type="text" className="Chatbox-textbox-input" 
        value={text} onChange={onTextChange}onKeyPress={keyPress}/>
        <div className="Chatbox-textbox-send" onClick={onSend}>Send!
        </div>
      </div>
    </div>
    </App>
    );
  }

export default Chatbox;
