import './Chatbox.css';
<<<<<<< HEAD
import {useState, useEffect } from 'react';
=======
import {useState, useEffect} from 'react';
>>>>>>> 5a5c7bd7829e358da49de8bd8efe51769efdf865
import App from './App';
import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines( l => [...l, {
        sender: x.sender, 
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
    })

  }, []);
  
  useEffect(() => {
    chatroomRef.on('child_added', snapshot =>{
      let x = snapshot.val();
      setLines( l => [...l, {
        sender: x.sender,
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
    })

  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
<<<<<<< HEAD
    //Push message
    chatroomRef.push({
      sender: "Me", 
=======
    chatroomRef.push({
      sender: "Me",
>>>>>>> 5a5c7bd7829e358da49de8bd8efe51769efdf865
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13){
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
                              {x.sender+":"}
                            </div>
                            <div>
                              {x.message}
                            </div>
                            <div>
<<<<<<< HEAD
                              {x.timestamp.toLocaleDateString()}
=======
                              {x.timestamp.toLocaleString()}
>>>>>>> 5a5c7bd7829e358da49de8bd8efe51769efdf865
                            </div>
                        </div>
                })
                }
            </div>
            <div className="App-textbox-chatbox-icon" >
            <i class="fas fa-microphone-alt"></i> 
            <i class="fas fa-file-upload hide-when-small"></i>
            <i class="fas fa-plus hide-when-big"></i>
            <i class="fas fa-images hide-when-small"></i> 
            <i class="fas fa-camera"></i> 
            </div>

            <div className="App-textbox">
                <input type="text" className="App-textbox-input" 
                value={text} onChange={onTextChange} onKeyPress={keyPress}/>
                <div className="App-textbox-send" onClick={onSend}> <i class="far fa-paper-plane"></i> </div>
            </div>
        </div>
    </App>
  );
}

export default Chatbox;
