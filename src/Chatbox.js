import './Chatbox.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from './App';
import firebase from './firebaseConfig';
import logo2 from './LoginIcon.png'

var chatroomRef;


import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1')

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const [name, setName] = useState("MyName");
  const [chatroom, setChatroom] = useState("chatroom");

  useEffect(() => {
    setLines(_=>[])
    chatroomRef = firebase.database().ref(chatroom);
    chatroomRef.on('child_added', (snapshot) => {
      let x = snapshot.val();
      setLines(line => [...line,{
        sender: x.sender,
        message: x.message,
        timestamp: new Date(x.timestamp)
      }]);
    })

    return () => {
      chatroomRef.off('child_added')
    };
  }, [chatroom]);

  const onRoomChange = (event)=> {
    setChatroom(event.target.value);
  }
  const onTextChange = (event) =>{
    setText(event.target.value);
  };

  const onNameChange = (event) =>{
    setName(event.target.value);
  }

  const onSend = () =>{
    chatroomRef.push({
      sender: name,
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
        <input type = "text" value = {chatroom} onChange= {onRoomChange}/>
        <input type = "text" value = {name} onChange={onNameChange}/>
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
